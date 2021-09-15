var searchIndex = JSON.parse('{\
"cargo_crev_reviews":{"doc":"This module contains the boilerplate to parse and match …","t":[4,13,13,11,11,5,0,11,11,0,5,5,5,5,5,5,5,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"n":["Cache","NoStore","Ok","borrow","borrow_mut","file_not_found_404","files_mod","from","into","methods_mod","parse_get_uri_and_response_file","parse_post_data_and_match_method","response_404_not_found","response_file_base64","response_file_text","return_json_rpc_result","start_web_server","try_from","try_into","type_id","css_cargo_crev_reviews_css","css_fa_solid_900_woff2","css_fontawesome_css","css_normalize_css","css_roboto_medium_woff2","icons_icon_032_png","icons_icon_128_png","icons_icon_192_png","index_html","pages_review_edit_html","pages_review_new_html","pages_review_show_html","pkg_cargo_crev_reviews_wasm_bg_wasm","pkg_cargo_crev_reviews_wasm_js","review_edit_json","review_save_json"],"q":["cargo_crev_reviews","","","","","","","","","","","","","","","","","","","","cargo_crev_reviews::files_mod","","","","","","","","","","","","","","cargo_crev_reviews::methods_mod",""],"d":["","","","","","","","","","","GET is used only to request files Files are stored in …","https://www.jsonrpc.org/specification","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[null,null,null,[[]],[[]],[[],["str",15]],null,[[]],[[]],null,[[["str",15],["builder",3]],[["vec",3],["response",3]]],[[["vec",3]],["string",3]],[[["str",15],["builder",3]],[["vec",3],["response",3]]],[[["str",15],["builder",3]],[["vec",3],["response",3]]],[[["builder",3],["cache",4],["str",15]],[["vec",3],["response",3]]],[[["u32",15],["str",15]],["string",3]],[[["str",15]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["str",15]],[[["u32",15],["value",4]],["string",3]],[[["u32",15],["value",4]],["string",3]]],"p":[[4,"Cache"]]},\
"cargo_crev_reviews_common":{"doc":"","t":[3,3,3,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12],"n":["ReviewEditParams","ReviewSaveParams","ReviewShowParams","RpcError","RpcErrorCodeMessage","RpcMethod","RpcResult","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","code","comment_md","comment_md","comment_md","crate_name","crate_name","crate_name","crate_version","crate_version","crate_version","default","default","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","error","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","id","id","id","into","into","into","into","into","into","into","jsonrpc","jsonrpc","jsonrpc","message","method","method","page_html","params","rating","rating","rating","result","serialize","serialize","serialize","serialize","serialize","serialize","serialize","thoroughness","thoroughness","thoroughness","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","understanding","understanding","understanding"],"q":["cargo_crev_reviews_common","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","the name of the method that will process this response on …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,1,2,3,4,5,6,7,1,2,3,4,5,6,7,3,5,6,7,5,6,7,5,6,7,6,7,1,2,3,4,5,6,7,4,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,4,1,2,3,4,5,6,7,1,2,4,3,1,2,6,1,5,6,7,2,1,2,3,4,5,6,7,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,5,6,7],"f":[null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,[[],["reviewshowparams",3]],[[],["revieweditparams",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null],"p":[[3,"RpcMethod"],[3,"RpcResult"],[3,"RpcErrorCodeMessage"],[3,"RpcError"],[3,"ReviewSaveParams"],[3,"ReviewShowParams"],[3,"ReviewEditParams"]]},\
"cargo_crev_reviews_wasm":{"doc":"","t":[5,14,14,0,0,14,5,0,5,0,3,12,11,11,5,5,11,11,11,11,5,5,5,5,5,5,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"n":["__wasm_bindgen_generated_wasm_bindgen_start","on_click","on_keyup","page_review_mod","pages_mod","row_on_click","rpc_json_request_value","utils_mod","wasm_bindgen_start","web_sys_mod","REVIEW_SHOW_DATA","__private_field","borrow","borrow_mut","button_review_edit_on_click","button_review_save_on_click","deref","from","initialize","into","page_review_edit","page_review_new","page_review_show","review_exist_next_attribute","review_replace_next_attribute","review_replace_next_text_node","try_from","try_into","type_id","post_request","process_html","find_from","find_pos_after_delimiter","find_pos_before_delimiter","get_delimited_text","get_random_u32","debug_duration","debug_write","fetch_post_response","fetch_response","get_element_by_id","get_html_element_by_id","get_input_element_value_string_by_id","get_input_html_element_by_id","get_now_date","get_text","get_text_area_element_value_string_by_id","get_value_of_radio_group_by_name","now_performance_millisecond","set_inner_html","set_text","window"],"q":["cargo_crev_reviews_wasm","","","","","","","","","","cargo_crev_reviews_wasm::page_review_mod","","","","","","","","","","","","","","","","","","","cargo_crev_reviews_wasm::pages_mod","","cargo_crev_reviews_wasm::utils_mod","","","","","cargo_crev_reviews_wasm::web_sys_mod","","","","","","","","","","","","","","",""],"d":["To start the Wasm application, wasm_bindgen runs this …","Simple macro to set listener of on_click events to an …","Simple macro to set listener of onkeyup events to an …","","","list contains rows, every row item needs a separate event …","","utils_mod.rs","To start the Wasm application, wasm_bindgen runs this …","helper functions for web_sys, window, document, dom, …","mutable static, because it is hard to pass variables …","","","","send requests in json_rpc","send requests in json_rpc","","","","","the code for processing the page review_edit the data and …","fetch and inject HTML fragment into …","the code for processing the page review_show the data and …","if the attribute is like …","if the <code>next_attribute_replace</code> is not None then replace …","if the comment is like , starts with <code>wt_</code> (web browser …","","","","","With reader_for_microXml parse the xml. If found the …","find str from pos_cursor low level","return the position after the delimiter or None Does NOT …","return the position before the delimiter or None Does NOT …","returns string between the start end end delimiters …","get a random number u32","debug write the duration of code execution","debug write into session_storage","fetch POST response in Rust with async await for executor …","fetch in Rust with async await for executor spawn_local() …","get element by id","get html element by id","get input element value string by id","get input html element by id","","get text from element_id","get input element value string by id","get elements by name for example radio group","timestamp with milliseconds","set inner html to element_id","set text to element_id","return window object"],"i":[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[[[]],null,null,null,null,null,[[["u32",15],["str",15]],["jsvalue",3]],null,[[],[["jsvalue",3],["result",4]]],null,null,null,[[]],[[]],[[["str",15]]],[[["str",15]]],[[],["mutex",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[["mutexguard",3],["str",15],["option",4]],["string",3]],[[["option",4],["str",15],["mutexguard",3]],["string",3]],[[["option",4],["str",15],["mutexguard",3]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["jsvalue",3]]],[[["reviewshowparams",3],["fn",8],["mutexguard",3],["fn",8],["fn",8],["string",3]],["string",3]],[[["usize",15],["str",15]],[["usize",15],["option",4]]],[[["usize",15],["str",15]],[["usize",15],["option",4]]],[[["usize",15],["str",15]],[["usize",15],["option",4]]],[[["usize",15],["str",15]],["option",4]],[[],["u32",15]],[[["f64",15],["str",15]]],[[["str",15]]],[[["jsvalue",3],["str",15],["option",4]]],[[["str",15]]],[[["str",15]],["element",3]],[[["str",15]],["htmlelement",3]],[[["str",15]],["string",3]],[[["str",15]],["htmlinputelement",3]],[[],["string",3]],[[["str",15]],["string",3]],[[["str",15]],["string",3]],[[["str",15]],["string",3]],[[],["f64",15]],[[["str",15]]],[[["str",15]]],[[],["window",3]]],"p":[[3,"REVIEW_SHOW_DATA"]]},\
"simple_server":{"doc":"A simple web-server.","t":[12,12,18,18,18,18,3,18,18,18,18,13,18,18,4,18,18,18,18,18,18,18,18,6,13,13,18,18,18,18,3,13,13,18,18,18,18,18,18,18,18,3,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,3,18,18,18,18,3,13,3,3,6,18,18,18,3,3,18,18,18,13,18,18,18,18,18,18,18,18,12,12,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,12,12,11,11,11,12,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,0,11,12,11,11,12,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,5,13,4,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,13,3,3,3,4,13,3,3,3,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,12,12,11,11,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,11,11,11,11,11,12,12,5,5,5,5],"n":["0","0","ACCEPTED","ALREADY_REPORTED","BAD_GATEWAY","BAD_REQUEST","Builder","CONFLICT","CONNECT","CONTINUE","CREATED","ConnectionClosed","DELETE","EXPECTATION_FAILED","Error","FAILED_DEPENDENCY","FORBIDDEN","FOUND","GATEWAY_TIMEOUT","GET","GONE","HEAD","HTTP_VERSION_NOT_SUPPORTED","Handler","Http","HttpParse","IM_A_TEAPOT","IM_USED","INSUFFICIENT_STORAGE","INTERNAL_SERVER_ERROR","InvalidStatusCode","InvalidUri","Io","LENGTH_REQUIRED","LOCKED","LOOP_DETECTED","METHOD_NOT_ALLOWED","MISDIRECTED_REQUEST","MOVED_PERMANENTLY","MULTIPLE_CHOICES","MULTI_STATUS","Method","NETWORK_AUTHENTICATION_REQUIRED","NON_AUTHORITATIVE_INFORMATION","NOT_ACCEPTABLE","NOT_EXTENDED","NOT_FOUND","NOT_IMPLEMENTED","NOT_MODIFIED","NO_CONTENT","OK","OPTIONS","PARTIAL_CONTENT","PATCH","PAYLOAD_TOO_LARGE","PAYMENT_REQUIRED","PERMANENT_REDIRECT","POST","PRECONDITION_FAILED","PRECONDITION_REQUIRED","PROCESSING","PROXY_AUTHENTICATION_REQUIRED","PUT","Parts","RANGE_NOT_SATISFIABLE","REQUEST_HEADER_FIELDS_TOO_LARGE","REQUEST_TIMEOUT","RESET_CONTENT","Request","RequestTooLarge","Response","ResponseBuilder","ResponseResult","SEE_OTHER","SERVICE_UNAVAILABLE","SWITCHING_PROTOCOLS","Server","StatusCode","TEMPORARY_REDIRECT","TOO_MANY_REQUESTS","TRACE","Timeout","UNAUTHORIZED","UNAVAILABLE_FOR_LEGAL_REASONS","UNPROCESSABLE_ENTITY","UNSUPPORTED_MEDIA_TYPE","UPGRADE_REQUIRED","URI_TOO_LONG","USE_PROXY","VARIANT_ALSO_NEGOTIATES","_priv","_priv","as_ref","as_str","as_str","as_u16","body","body","body","body","body","body_mut","body_mut","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","builder","builder","canonical_reason","clone","clone","clone_into","clone_into","cmp","connect","default","default","default","default","default","delete","dont_serve_static_files","eq","eq","eq","eq","eq","eq","error","extension","extensions","extensions","extensions","extensions_mut","extensions_mut","extensions_mut","extensions_ref","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from_bytes","from_bytes","from_parts","from_parts","from_str","from_str","from_u16","get","handle_connection","handler","hash","hash","head","head","head","header","headers","headers","headers","headers_mut","headers_mut","headers_mut","headers_ref","inner","inner","into","into","into","into","into","into","into","into","into_body","into_body","into_parts","into_parts","is_client_error","is_idempotent","is_informational","is_redirection","is_safe","is_server_error","is_success","listen","listen_on_socket","map","map","method","method_mut","ne","ne","new","new","new","new","options","parsing","partial_cmp","patch","pool_size","post","put","request","set_static_directory","static_directory","status","status","status","status_mut","timeout","to_owned","to_owned","to_string","to_string","to_string","trace","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","uri","uri_mut","version","version","version","version","version_mut","version_mut","with_timeout","write_response","ConnectionClosed","Error","Http","HttpParse","InvalidUri","Io","RequestTooLarge","Timeout","borrow","borrow_mut","fmt","from","from","from","from","from","into","try_from","try_into","type_id","0","0","1","1","Complete","Header","HeaderIndices","HeaderIter","ParseResult","Partial","Request","RequestMethodIndices","RequestProtocolIndices","body","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","buffer","buffer_extend_from_slice","from","from","from","from","from","from","from","headers","headers","into","into","into","into","into","into","into","into_iter","method","method","name","name","next","path","path","proto","slice_indices","split_body","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_parse_request","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","value","build_request","duration_to_milliseconds","elapsed_milliseconds","read"],"q":["simple_server","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","simple_server::error","","","","","","","","","","","","","","","","","","","","simple_server::parsing","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","simple_server::request","","",""],"d":["","","202 Accepted [RFC7231, Section 6.3.3]","208 Already Reported [RFC5842]","502 Bad Gateway [RFC7231, Section 6.6.3]","400 Bad Request [RFC7231, Section 6.5.1]","An HTTP response builder","409 Conflict [RFC7231, Section 6.5.8]","CONNECT","100 Continue [RFC7231, Section 6.2.1]","201 Created [RFC7231, Section 6.3.2]","The connection was closed while reading the request.","DELETE","417 Expectation Failed [RFC7231, Section 6.5.14]","Various errors that may happen while handling requests.","424 Failed Dependency [RFC4918]","403 Forbidden [RFC7231, Section 6.5.3]","302 Found [RFC7231, Section 6.4.3]","504 Gateway Timeout [RFC7231, Section 6.6.5]","GET","410 Gone [RFC7231, Section 6.5.9]","HEAD","505 HTTP Version Not Supported [RFC7231, Section 6.6.6]","","An HTTP error.","An error while parsing the HTTP request.","418 I’m a teapot [curiously not registered by IANA but …","226 IM Used [RFC3229]","507 Insufficient Storage [RFC4918]","500 Internal Server Error [RFC7231, Section 6.6.1]","A possible error value when converting a <code>StatusCode</code> from …","An error while parsing the URI of the request.","An error while doing I/O.","411 Length Required [RFC7231, Section 6.5.10]","423 Locked [RFC4918]","508 Loop Detected [RFC5842]","405 Method Not Allowed [RFC7231, Section 6.5.5]","421 Misdirected Request RFC7540, Section 9.1.2","301 Moved Permanently [RFC7231, Section 6.4.2]","300 Multiple Choices [RFC7231, Section 6.4.1]","207 Multi-Status [RFC4918]","The Request Method (VERB)","511 Network Authentication Required [RFC6585]","203 Non-Authoritative Information [RFC7231, Section 6.3.4]","406 Not Acceptable [RFC7231, Section 6.5.6]","510 Not Extended [RFC2774]","404 Not Found [RFC7231, Section 6.5.4]","501 Not Implemented [RFC7231, Section 6.6.2]","304 Not Modified [RFC7232, Section 4.1]","204 No Content [RFC7231, Section 6.3.5]","200 OK [RFC7231, Section 6.3.1]","OPTIONS","206 Partial Content [RFC7233, Section 4.1]","PATCH","413 Payload Too Large [RFC7231, Section 6.5.11]","402 Payment Required [RFC7231, Section 6.5.2]","308 Permanent Redirect [RFC7238]","POST","412 Precondition Failed [RFC7232, Section 4.2]","428 Precondition Required [RFC6585]","102 Processing [RFC2518]","407 Proxy Authentication Required [RFC7235, Section 3.2]","PUT","Component parts of an HTTP <code>Response</code>","416 Range Not Satisfiable [RFC7233, Section 4.4]","431 Request Header Fields Too Large [RFC6585]","408 Request Timeout [RFC7231, Section 6.5.7]","205 Reset Content [RFC7231, Section 6.3.6]","Represents an HTTP request.","The request’s size (headers + body) exceeded the …","Represents an HTTP response","An HTTP response builder","","303 See Other [RFC7231, Section 6.4.4]","503 Service Unavailable [RFC7231, Section 6.6.4]","101 Switching Protocols [RFC7231, Section 6.2.2]","A web server.","An HTTP status code (<code>status-code</code> in RFC 7230 et al.).","307 Temporary Redirect [RFC7231, Section 6.4.7]","429 Too Many Requests [RFC6585]","TRACE","The request timed out.","401 Unauthorized [RFC7235, Section 3.1]","451 Unavailable For Legal Reasons [RFC7725]","422 Unprocessable Entity [RFC4918]","415 Unsupported Media Type [RFC7231, Section 6.5.13]","426 Upgrade Required [RFC7231, Section 6.5.15]","414 URI Too Long [RFC7231, Section 6.5.12]","305 Use Proxy [RFC7231, Section 6.4.5]","506 Variant Also Negotiates [RFC2295]","","","","Return a &str representation of the HTTP method","Returns a &str representation of the <code>StatusCode</code>","Returns the <code>u16</code> corresponding to this <code>StatusCode</code>.","Returns a reference to the associated HTTP body.","Returns a reference to the associated HTTP body.","“Consumes” this builder, using the provided <code>body</code> to …","","","Returns a mutable reference to the associated HTTP body.","Returns a mutable reference to the associated HTTP body.","","","","","","","","","","","","","","","","","Creates a new builder-style object to manufacture a …","Creates a new builder-style object to manufacture a …","Get the standardised <code>reason-phrase</code> for this status code.","","","","","","Creates a new <code>Builder</code> initialized with a CONNECT method …","","","","","","Creates a new <code>Builder</code> initialized with a DELETE method …","Disables serving static files.","","","","","","","","Adds an extension to this builder","Returns a reference to the associated extensions.","Returns a reference to the associated extensions.","The response’s extensions","Returns a mutable reference to the associated extensions.","Returns a mutable reference to the associated extensions.","Get a mutable reference to the extensions for this …","Get a reference to the extensions for this response …","","","","","","","","","","","","","","","","","","","","","","Converts a slice of bytes to an HTTP method.","Converts a &[u8] to a status code","Creates a new <code>Request</code> with the given components parts and …","Creates a new <code>Response</code> with the given head and body","","","Converts a u16 to a status code.","Creates a new <code>Builder</code> initialized with a GET method and …","","","","","Creates a new <code>Builder</code> initialized with a HEAD method and …","","","Appends a header to this response builder.","Returns a reference to the associated header field map.","Returns a reference to the associated header field map.","The response’s headers","Returns a mutable reference to the associated header …","Returns a mutable reference to the associated header …","Get header on this response builder. when builder has …","Get header on this response builder.","","","","","","","","","","","Consumes the request, returning just the body.","Consumes the response, returning just the body.","Consumes the request returning the head and body parts.","Consumes the response returning the head and body parts.","Check if status is within 400-499.","Whether a method is considered “idempotent”, meaning …","Check if status is within 100-199.","Check if status is within 300-399.","Whether a method is considered “safe”, meaning the …","Check if status is within 500-599.","Check if status is within 200-299.","Tells the server to listen on a specified host and port.","Tells the server to listen on a provided <code>TcpListener</code>.","Consumes the request returning a new request with body …","Consumes the response returning a new response with body …","Returns a reference to the associated HTTP method.","Returns a mutable reference to the associated HTTP method.","","","Constructs a new server with the given handler.","Creates a new blank <code>Request</code> with the body","Creates a new blank <code>Response</code> with the body","Creates a new default instance of <code>Builder</code> to construct …","Creates a new <code>Builder</code> initialized with an OPTIONS method …","","","Creates a new <code>Builder</code> initialized with a PATCH method and …","","Creates a new <code>Builder</code> initialized with a POST method and …","Creates a new <code>Builder</code> initialized with a PUT method and …","","Sets the proper directory for serving static files.","","Returns the <code>StatusCode</code>.","Set the HTTP status for this response.","The response’s status","Returns a mutable reference to the associated <code>StatusCode</code>.","","","","","","","Creates a new <code>Builder</code> initialized with a TRACE method and …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns a reference to the associated URI.","Returns a mutable reference to the associated URI.","Returns the associated version.","Returns a reference to the associated version.","Set the HTTP version for this response.","The response’s version","Returns a mutable reference to the associated version.","Returns a mutable reference to the associated version.","Constructs a new server with the given handler and the …","","The connection was closed while reading the request.","Various errors that may happen while handling requests.","An HTTP error.","An error while parsing the HTTP request.","An error while parsing the URI of the request.","An error while doing I/O.","The request’s size (headers + body) exceeded the …","The request timed out.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,2,2,2,2,2,0,2,1,2,2,3,1,2,0,2,2,2,2,1,2,1,2,0,3,3,2,2,2,2,0,3,3,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,1,2,1,2,2,2,1,2,2,2,2,1,0,2,2,2,2,0,3,0,0,0,2,2,2,0,0,2,2,1,3,2,2,2,2,2,2,2,2,4,5,1,1,2,2,6,7,8,6,7,6,7,9,6,7,4,5,1,8,2,9,6,7,4,5,1,8,2,6,7,2,1,2,1,2,2,6,6,7,1,8,2,6,9,1,1,1,1,2,2,0,8,6,7,4,6,7,8,8,9,6,7,4,5,5,1,1,8,2,2,9,6,7,4,5,1,1,8,2,2,1,2,6,7,1,2,2,6,9,9,1,2,6,6,7,8,6,7,4,6,7,8,8,8,8,9,6,7,4,5,1,8,2,6,7,6,7,2,1,2,2,1,2,2,9,9,6,7,6,6,1,2,9,6,7,8,6,0,2,6,9,6,6,0,9,9,7,8,4,7,9,1,2,5,1,2,6,9,6,7,4,5,1,1,1,8,2,2,2,2,9,6,7,4,5,1,8,2,9,6,7,4,5,1,8,2,6,6,6,7,8,4,6,7,9,0,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,10,11,10,11,12,0,0,0,0,12,0,0,0,13,10,14,15,13,16,11,12,10,14,15,13,16,11,12,13,13,10,14,15,13,16,11,12,13,13,10,14,15,13,16,11,12,11,13,13,15,16,11,13,14,13,0,13,10,14,15,13,16,11,12,10,14,15,13,16,11,12,0,10,14,15,13,16,11,12,15,16,0,0,0,0],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["str",15]],[[],["str",15]],[[],["str",15]],[[],["u16",15]],[[]],[[]],[[],[["response",3],["result",4],["error",3]]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["builder",3]],[[],["builder",3]],[[],[["str",15],["option",4]]],[[],["method",3]],[[],["statuscode",3]],[[]],[[]],[[["statuscode",3]],["ordering",4]],[[],["builder",3]],[[],["request",3]],[[],["response",3]],[[],["method",3]],[[],["builder",3]],[[],["statuscode",3]],[[],["builder",3]],[[]],[[],["bool",15]],[[["str",15]],["bool",15]],[[["method",3]],["bool",15]],[[["method",3]],["bool",15]],[[["statuscode",3]],["bool",15]],[[["u16",15]],["bool",15]],null,[[],["builder",3]],[[],["extensions",3]],[[],["extensions",3]],null,[[],["extensions",3]],[[],["extensions",3]],[[],[["option",4],["extensions",3]]],[[],[["option",4],["extensions",3]]],[[["formatter",3]],["result",6]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[["formatter",3]],[["error",3],["result",4]]],[[]],[[]],[[]],[[]],[[]],[[["method",3]],["method",3]],[[]],[[]],[[["statuscode",3]],["statuscode",3]],[[]],[[],[["method",3],["invalidmethod",3],["result",4]]],[[],[["result",4],["statuscode",3],["invalidstatuscode",3]]],[[["parts",3]],["request",3]],[[["parts",3]],["response",3]],[[["str",15]],[["method",3],["result",4]]],[[["str",15]],[["result",4],["statuscode",3],["invalidstatuscode",3]]],[[["u16",15]],[["result",4],["statuscode",3],["invalidstatuscode",3]]],[[],["builder",3]],[[["tcpstream",3]],[["result",4],["error",4]]],null,[[]],[[]],[[],["builder",3]],null,null,[[],["builder",3]],[[],["headermap",3]],[[],["headermap",3]],null,[[],["headermap",3]],[[],["headermap",3]],[[],[["option",4],["headermap",3]]],[[],[["option",4],["headermap",3]]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[["str",15]]],[[["tcplistener",3]]],[[],["request",3]],[[],["response",3]],[[],["method",3]],[[],["method",3]],[[["method",3]],["bool",15]],[[["statuscode",3]],["bool",15]],[[],["server",3]],[[],["request",3]],[[],["response",3]],[[],["builder",3]],[[],["builder",3]],null,[[["statuscode",3]],[["option",4],["ordering",4]]],[[],["builder",3]],[[],["u32",15]],[[],["builder",3]],[[],["builder",3]],null,[[["into",8],["pathbuf",3]]],null,[[],["statuscode",3]],[[],["builder",3]],null,[[],["statuscode",3]],null,[[]],[[]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["builder",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["method",3],["result",4]]],[[["str",15]],[["method",3],["result",4]]],[[],["result",4]],[[],["result",4]],[[],[["statuscode",3],["result",4]]],[[["str",15]],[["statuscode",3],["result",4]]],[[["u16",15]],[["statuscode",3],["result",4]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["uri",3]],[[],["uri",3]],[[],["version",3]],[[],["version",3]],[[["version",3]],["builder",3]],null,[[],["version",3]],[[],["version",3]],[[["duration",3]],["server",3]],[[["write",8],["response",3],["borrow",8]],[["result",4],["error",4]]],null,null,null,null,null,null,null,null,[[]],[[]],[[["formatter",3]],["result",6]],[[["invaliduri",3]],["error",4]],[[["error",3]],["error",4]],[[["error",3]],["error",4]],[[["error",4]],["error",4]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["headeriter",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["str",15]],null,null,null,[[],["option",4]],[[],["str",15]],null,null,[[]],[[],[["vec",3],["u8",15]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["vec",3],["u8",15]],[["result",4],["parseresult",4],["error",4]]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,[[["request",3]],[["request",3],["result",4],["error",4]]],[[["duration",3]],["u64",15]],[[["instant",3]],["u64",15]],[[["option",4],["duration",3]],[["request",3],["result",4],["error",4]]]],"p":[[3,"Method"],[3,"StatusCode"],[4,"Error"],[3,"Parts"],[3,"InvalidStatusCode"],[3,"Request"],[3,"Response"],[3,"Builder"],[3,"Server"],[3,"RequestMethodIndices"],[3,"HeaderIter"],[4,"ParseResult"],[3,"Request"],[3,"RequestProtocolIndices"],[3,"HeaderIndices"],[3,"Header"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};