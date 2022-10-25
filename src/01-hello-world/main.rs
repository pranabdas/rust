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
    println!("Is 3 > 4 ? {}", 3 > 4);
    // rust figures out correct formatting via Display trait (it will work most
    // cases)

    // we can use positional argument
    println!(
        "Hello {0}, you are {1} years old. Good bye {0}.",
        "Pranab", 35
    );
    println!(
        "Hello {name}, you are {age} years old. Good bye {name}.",
        name = "Pranab",
        age = 35
    );

    // complex data types that do not implement Display trait, often have debug
    // trait
    println!("Debug formatter: {:?}", (2, 9)); // here we try to print a tuple

    // print multiple lines with line breaks
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
