initSidebarItems({"enum":[["UrlUtf8Error","thiserror enum"]],"fn":[["__wasm_bindgen_generated_wasm_bindgen_start","To start the Wasm application, wasm_bindgen runs this function"],["get_3_url_param_from_hash","get 3 param from hash example “#edit/crate_name/crate_version” -> [“edit”,“crate_name”,“crate_version”] if the param does not exist returns an empty string"],["router_boilerplate","jump over this boilerplate to router_for_local_hash_routing()"],["router_for_local_hash_routing","read the url hash parameters for local routing this is a SPA single page application. The page is always index.html then a hash parameter is added for local routing like index.html#edit/crate_name/crate_version the main page is opened only once. It lists the cargo_tree and verify all the dependencies. All other pages are opened in separate tabs. So the user can easily close this tabs and return to the main page. The use of the back button in not recommended."],["wasm_bindgen_start","To start the Wasm application, wasm_bindgen runs this function"]],"macro":[["on_click","Simple macro to set listener of on_click events to an element_id. fn with 1 arg(element_id): on_click!(element_id, function_ident)"],["on_keyup","Simple macro to set listener of onkeyup events to an element_id. on_keyup!(“regex_text”, run_regex)"],["row_on_click","list contains rows, every row item needs a separate event handler the element Id is concatenation of element_prefix plus the row_number"],["url_u","Constructor macro for UrlUtf8EncodedString  "]],"mod":[["auto_generated_mod",""],["cln_methods_mod","namespace for specialized cln_methods"],["html_mod","generic code to process html"],["utils_mod","small utility functions"],["web_sys_mod","helper functions for web_sys, window, document, dom, local_storage, session_storage,…"]],"struct":[["SERVER_FIRST_SUBDIRECTORY",""],["SERVER_HOST","127.0.0.1"],["SERVER_PORT","8182"],["UrlPartUtf8Decoded","the url must be utf 8. Only the 5 control characters are encoded. url has parts or fragments or segments delimited mostly by slash / every part must be encoded/decoded separately, to maintain the control character slash /  "],["UrlUtf8EncodedString","Type UrlUtf8EncodedString explicitly informs that the content has been url encoded. It contains a string with the whole url. The url is constructed with a special macro, where the dynamic parts are always encoded. It is impossible to force the developer to properly encode the static part of the url. But this special type is making this kind of errors difficult, obvious and traceable.  "]]});