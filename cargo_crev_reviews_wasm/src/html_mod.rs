// cln_methods_mod.rs

//! generic code to process html

use reader_for_microxml::ReaderForMicroXml;
use reader_for_microxml::Token;
use unwrap::unwrap;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local;

use crate::auto_generated_mod::common_structs_mod::*;
use crate::on_click;
use crate::utils_mod::*;
use crate::web_sys_mod as w;

pub trait HtmlProcessor {
    // region: mandatory functions to implement
    fn process_repetitive_items(&self, name_of_repeat_segment: &str, html_repetitive_template: &str, html_new: &mut String);
    fn match_wt(&self, wt_name: &str, row_number: Option<usize>) -> String;
    fn match_wb(&self, wb_name: &str) -> bool;
    // endregion: mandatory functions to implement

    // region: trait functions

    /// process repetitive segments with a list of data
    fn process_html(&self, html_old: &str) -> String {
        let html_after_delete = Self::delete_wd(html_old);
        // here inside is also the call to process_html_with_item
        let html_new = self.process_repetitive_html(html_after_delete);
        // return
        html_new
    }

    /// in the html there can be segments that are only to help for graphical design
    /// this segments must be deleted before rendering the html
    /// it is marked with: <!--wd_start_delete--> <!--wd_end_delete-->
    fn delete_wd(html_old: &str) -> String {
        let mut html_new = String::with_capacity(html_old.len());
        let mut cursor = 0;
        let mut old_end = 0;
        while let Some(range_to_remove) = find_range_including_delimiters(&html_old, &mut cursor, "<!--wd_start_delete-->", "<!--wd_end_delete-->") {
            html_new.push_str(&html_old[old_end..range_to_remove.start.clone()]);
            old_end = range_to_remove.end.clone();
        }
        html_new.push_str(&html_old[old_end..]);
        html_new
    }

    /// inside the html there can be `wr_ web-browser repetitive segments`
    /// marked with <!--wr_repeat_name--><!--wr_end_name-->
    fn process_repetitive_html(&self, html_old: String) -> String {
        let mut html_wo_repeat = String::with_capacity(html_old.len());
        let mut cursor = 0;
        let mut old_end = 0;
        let mut vec_of_repeat: Vec<(String, String)> = vec![];

        // remove the repeat segments and store them in a vec
        while let Some(range_name_of_segment) = find_range_between_delimiters(&html_old, &mut cursor, "<!--wr_repeat_", "-->") {
            let name_of_repeat_segment = &html_old[range_name_of_segment];
            let start_marker = format!("<!--wr_repeat_{}-->", name_of_repeat_segment);
            let end_marker = format!("<!--wr_end_{}-->", name_of_repeat_segment);
            if let Some(range_segment) = find_range_between_delimiters(&html_old, &mut 0, &start_marker, &end_marker) {
                // the full name is ok for quick find the name in the code
                let full_name = format!("wr_repeat_{}", name_of_repeat_segment);
                vec_of_repeat.push((full_name, html_old[range_segment.clone()].to_string()));
                html_wo_repeat.push_str(&html_old[old_end..range_segment.start]);
                old_end = range_segment.end;
            }
        }
        html_wo_repeat.push_str(&html_old[old_end..]);

        // here process the main item without repetitive segments. Because it is short.
        let html_wo_repeat = self.process_html_with_item(&html_wo_repeat, None);

        let mut html_new = String::with_capacity(html_wo_repeat.len());
        let mut old_end = 0;
        for rep in vec_of_repeat.iter() {
            let name_of_repeat_segment = rep.0.trim_start_matches("wr_repeat_").to_string();
            let start_marker = format!("<!--wr_repeat_{}-->", name_of_repeat_segment);
            let end_marker = format!("<!--wr_end_{}-->", name_of_repeat_segment);
            if let Some(range_segment) = find_range_including_delimiters(&html_wo_repeat, &mut 0, &start_marker, &end_marker) {
                html_new.push_str(&html_wo_repeat[old_end..range_segment.start]);
                old_end = range_segment.end;
            }
            let html_rep = rep.1.clone();
            // the full name is ok for quick find the name in the code
            let full_name = format!("wr_repeat_{}", name_of_repeat_segment);
            self.process_repetitive_items(&full_name, &html_rep, &mut html_new);
        }
        html_new.push_str(&html_wo_repeat[old_end..]);

        html_new
    }

    /// if the comment is like <!--wt_method_name-->, starts with `wt_ web-browser text`
    /// Execute the replace_method and save the result in `next_text_node_replace`.
    /// On the next text node it will use this value.    
    fn replace_next_text_node(&self, name: &str, next_text_node_replace: &mut Option<String>, row_number: Option<usize>) {
        // log::info!("{} {}", function_name!(), name));
        let replace_text = self.match_wt(name, row_number);
        *next_text_node_replace = Some(replace_text);
    }

    /// if the `next_attribute_replace` is not None then replace attribute with `next_attribute_replace`
    /// if attribute starts with data-wt_ it is a replace command. Like: data-wt_width="width" width="90"
    /// the attribute value is the name of the next attribute, just for security
    /// Execute the response_method and save the result in `next_attribute_replace`, don't push attribute to string
    fn replace_next_attribute(&self, name: &str, value: &str, next_attribute_replace: &mut Option<(String, String)>, row_number: Option<usize>) {
        // log::info!("{} {} {}", function_name!(), name, value));
        // returns mostly empty string because it is all written in next_attribute_replace
        // only in case of error it writes something in the html, to find where the error occurred
        let attribute_name = value.to_string();
        let replace_text = self.match_wt(name.trim_start_matches("data-"), row_number);
        *next_attribute_replace = Some((attribute_name, replace_text));
    }

    /// if the attribute is like `data-wb_checked_th_none="checked" checked="checked"`, starts with `wb_ web-browser bool`
    /// the use of complete string wb_xxx enables easy and exact text search around the source code
    /// Execute the exists_method and store in `next_attribute_exist`
    /// The next attribute will exist or not because of this bool.
    fn exist_next_attribute(&self, name: &str, _value: &str, next_attribute_exist: &mut Option<bool>) {
        // log::info!("{}",function_name!());
        let wb_name = name.trim_start_matches("data-");
        let is_exist = self.match_wb(wb_name);
        *next_attribute_exist = Some(is_exist);
    }

    /// With reader_for_microXml parse the xml.
    /// If found the magic word `wt_` then run some code and push the result instead of the next element or attribute
    /// If normal element or attribute push it to the new String builder
    /// It is just strings so, that should be super fast.
    fn process_html_with_item(&self, html_fragment: &str, row_number: Option<usize>) -> String {
        let reader_iterator = ReaderForMicroXml::new(html_fragment);
        let mut html_after_process = String::with_capacity(html_fragment.len());
        let mut next_attribute_replace: Option<(String, String)> = None;
        let mut next_attribute_exist: Option<bool> = None;
        let mut next_text_node_replace: Option<String> = None;
        let mut last_token = "";
        let mut breadcrumb: Vec<&str> = vec![];
        for result_token in reader_iterator {
            match result_token {
                Ok(token) => match token {
                    Token::StartElement(name) => {
                        if last_token == "element" || last_token == "attribute" {
                            html_after_process.push_str(">");
                        }
                        if last_token != "text"
                            && (name == "div" || name == "textarea" || name == "h1" || name == "h2" || name == "h3" || name == "h4" || name == "pre")
                        {
                            html_after_process.push_str("\n");
                            html_after_process.push_str(&"    ".repeat(breadcrumb.len() + 1));
                        }
                        html_after_process.push_str(&format!("<{} ", name));
                        breadcrumb.push(name.clone());
                        last_token = "element";
                    }
                    Token::Attribute(name, value) => {
                        let exist_attribute = match next_attribute_exist {
                            None => true,
                            Some(is_exist) => {
                                next_attribute_exist = None;
                                is_exist
                            }
                        };

                        if exist_attribute {
                            let html = match next_attribute_replace {
                                Some(tuple_next_attribute_replace) => {
                                    let return_value = format!(r#"{}="{}" "#, tuple_next_attribute_replace.0, tuple_next_attribute_replace.1,);
                                    next_attribute_replace = None;
                                    return_value
                                }
                                None => {
                                    if name.starts_with("data-wt_") {
                                        // returns nothing, it writes into `next_attribute_replace`
                                        self.replace_next_attribute(name, value, &mut next_attribute_replace, row_number);
                                        String::new()
                                    } else if name.starts_with("data-wb_") {
                                        // returns nothing, it writes into `next_attribute_exist`
                                        self.exist_next_attribute(name, value, &mut next_attribute_exist);
                                        String::new()
                                    } else {
                                        // non processed attribute,
                                        // but `id` is special, it could have row_number in parenthesis like id="item(0)"
                                        if name == "id" && row_number.is_some() {
                                            format!(r#"{}="{}({})" "#, name, value, row_number.unwrap())
                                        } else {
                                            format!(r#"{}="{}" "#, name, value)
                                        }
                                    }
                                }
                            };
                            html_after_process.push_str(&html);
                            last_token = "attribute";
                        }
                    }
                    // the txt is still encoded for xml text node
                    Token::TextNode(txt) => {
                        if last_token == "element" || last_token == "attribute" {
                            html_after_process.push_str(">");
                        }
                        match next_text_node_replace {
                            None => html_after_process.push_str(&format!("{}", txt)),
                            Some(ref new_txt) => {
                                html_after_process.push_str(&format!("{}", new_txt));
                                next_text_node_replace = None;
                            }
                        }
                        last_token = "text";
                    }
                    Token::Comment(txt) => {
                        if last_token == "element" || last_token == "attribute" {
                            html_after_process.push_str(">");
                        }
                        if txt.starts_with("wt_") {
                            self.replace_next_text_node(txt, &mut next_text_node_replace, row_number);
                        } else {
                            let html = format!(r#"<!--{}-->"#, txt);
                            html_after_process.push_str(&html);
                        }

                        last_token = "comment"
                    }
                    Token::EndElement(end_element_name) => {
                        breadcrumb.pop();
                        if end_element_name.is_empty() {
                            html_after_process.push_str("/>");
                        } else {
                            if last_token == "element" || last_token == "attribute" {
                                html_after_process.push_str(">");
                            }
                            html_after_process.push_str(&format!("</{}>", end_element_name));
                        }
                        last_token = "end";
                    }
                },
                Err(err_msg) => {
                    log::error!("MicroXml incorrect : {}", err_msg);
                }
            }
        }
        html_after_process
    }

    // endregion: trait functions
}

pub fn post_request_await_run_response_method<T>(request_method: &str, request_data: T)
where
    T: serde::Serialize,
{
    let data = unwrap!(serde_json::to_value(request_data));
    let rpc = RpcRequest {
        request_method: request_method.to_string(),
        request_data: data,
    };
    let json_string = unwrap!(serde_json::to_string(&rpc));
    let rpc_request = JsValue::from_str(&json_string);

    spawn_local(async move {
        let rpc_request = Some(&rpc_request);
        let resp_body_text = w::fetch_post_response("submit", rpc_request).await;
        let srv_response: RpcResponse = unwrap!(serde_json::from_str(&resp_body_text));
        crate::auto_generated_mod::match_response_method_and_call_function(srv_response).await;
    });
}

pub fn extract_html(response: &RpcResponse) -> String {
    let response_html = &response.response_html;
    // only the html inside the <body> </body>
    let (html_fragment, _new_pos_cursor) = get_delimited_text(response_html, 0, "<body>", "</body>").unwrap();
    html_fragment
}

pub fn inject_into_html(html_after_process: &str) {
    w::set_inner_html("div_for_wasm_html_injecting", html_after_process);
}

pub fn navigation_on_click() {
    use crate::cln_methods_review_mod::*;
    use crate::cln_methods_verify_mod::*;
    use wasm_bindgen::JsCast;
    on_click!("button_review_new", request_review_new);
    on_click!("button_review_publish", request_review_publish);
    on_click!("button_update_registry_index", request_update_registry_index);
    on_click!("button_verify_project", request_verify_list);
}
