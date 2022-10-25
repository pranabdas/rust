use std::io::{self, Write}; // require for flushing tty

fn main() {
    print!("How old are you? ");
    io::stdout().flush().unwrap(); // flush tty
    let age = read_string();
    println!("You are {} years old.", age);
}

fn read_string() -> String {
    let mut input = String::new();
    std::io::stdin()
        .read_line(&mut input)
        .expect("Could not read input.");
    input.trim().to_string()
}
