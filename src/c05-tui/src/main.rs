// TUI: text-based user interface
// need libncursesw6 (debian/ubuntu): apt install libncursesw6
// for cross platform support, pancurses or crossterm
// https://github.com/gyscos/cursive
use cursive::views::{Dialog, TextView};

fn main() {
    // Creates the cursive root - required for every application.
    let mut siv = cursive::default();

    // Creates a dialog with a single "Quit" button
    siv.add_layer(Dialog::around(TextView::new("Hello Dialog!"))
                         .title("Cursive")
                         .button("Quit", |s| s.quit()));

    // Starts the event loop.
    siv.run();
}
