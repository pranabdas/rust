use std::io::{self, Write}; // require for flushing tty

fn main() {
    // the exclamation mark indicates println is a macro, without `!` it would
    // indicate a function. Macro is similar to inline functions. Corresponding
    // code is inserted where the macro is used
    println!("Hello, rust!");

    // use placeholder
    println!("{} {}", "Let's", "begin.");
    println!("I am {} years old.", 35);
    println!("{} + {} = {}", 22, 34, 22 + 34);
    println!("Is 3 > 4? {}", 3 > 4);

    // print multiple lines and line breaks
    println!("Rust is suitable for\nsystem programming.");
    println!(
        "These are 
separate lines."
    );
    println!(
        "This is \
    same line."
    );

    // use println (instead of print) wherever possible
    // print without new line
    print!("Happy ");
    io::stdout().flush().unwrap();
    println!("learning!");
}
