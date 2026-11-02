use client

#[wasm_bindgen]
pub fn render_preview(input: &str) -> String {
    format!("preview:{}", input)
}

#[wasm_bindgen]
pub fn export_native(input: &str, format: &str) -> String {
    format!("native-export:{}:{}", input, format)
}
