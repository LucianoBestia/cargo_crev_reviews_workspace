// auto_generated_mod.rs

// generated by `cargo auto` automation task
// Please, don't modify manually the special "region: generated..." that are filled by automation.

use crate::srv_methods_mod::srv_publisher_mod::*;
use crate::srv_methods_mod::srv_review_mod::*;
use crate::srv_methods_mod::srv_utils_mod::*;

pub fn match_request_method_and_call_function(request_method: &str, request_data: serde_json::Value) -> anyhow::Result<String> {
    match request_method {
        // region: generated match_response_method
        "srv_cargo_tree_project" => srv_cargo_tree_project(request_data),
        "srv_publisher_delete" => srv_publisher_delete(request_data),
        "srv_publisher_edit" => srv_publisher_edit(request_data),
        "srv_publisher_list" => srv_publisher_list(request_data),
        "srv_publisher_new" => srv_publisher_new(request_data),
        "srv_publisher_save" => srv_publisher_save(request_data),
        "srv_review_delete" => srv_review_delete(request_data),
        "srv_review_edit" => srv_review_edit(request_data),
        "srv_review_edit_or_new" => srv_review_edit_or_new(request_data),
        "srv_review_new" => srv_review_new(request_data),
        "srv_review_new_version" => srv_review_new_version(request_data),
        "srv_review_open_source_code" => srv_review_open_source_code(request_data),
        "srv_review_publish" => srv_review_publish(request_data),
        "srv_review_save" => srv_review_save(request_data),
        "srv_reviews_list" => srv_reviews_list(request_data),
        "srv_update_registry_index" => srv_update_registry_index(request_data),
        "srv_version_list" => srv_version_list(request_data),
        // endregion: generated match_response_method
        _ => anyhow::bail!("unknown server method = {}", request_method),
    }
}

// proxy for public methods on client
pub mod cln_methods {
    use crate::response_post_mod::return_srv_response;
    use function_name::named;

    // region: generated cln_methods

    #[named]
    pub fn cln_cargo_tree_list<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_modal_close<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_modal_error<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_no_action<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_publisher_edit_modal<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_publisher_list<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_publisher_new_modal<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_review_edit<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_review_list<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_review_new<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_review_publish_modal<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }

    #[named]
    pub fn cln_version_list<T>(response_data: T, response_html: &str) -> anyhow::Result<String>
    where
        T: serde::Serialize,
    {
        let response_method = function_name!();
        Ok(return_srv_response(response_method, response_data, response_html))
    }
    // endregion: generated cln_methods
}
