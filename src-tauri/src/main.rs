#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{Manager};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            use tauri_plugin_shadows::Shadows;
            main_window.set_shadow(true);

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
