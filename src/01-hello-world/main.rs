use std::io::{self, Write}; // require for flushing tty

fn main() {
    // the exclamation mark indicates println is a macro
    // use println wherever possible
    println!("Hello, rust!");

    // print without new line
    print!("Happy ");
    io::stdout().flush().unwrap();
    println!("learning!");
}
