use std::io::{self, Write}; // require for flushing tty
use std::str::FromStr;

fn main() {
    print!("How old are you? ");
    io::stdout().flush().unwrap(); // flush tty
    let age = read_number();

    let month: u16 = (age as u16) * 12;
    println!("You are {}+ months old.", month);

    let code: char = 'a';
    println!("char code: {}, ascii value: {}", code, code as u8);
}

fn read_string() -> String {
    let mut input = String::new();
    std::io::stdin()
        .read_line(&mut input)
        .expect("Could not read input.");
    input.trim().to_string()
}

fn read_number() -> u8 {
    let input = read_string();
    u8::from_str(&input).expect("Invalid input.")
}
