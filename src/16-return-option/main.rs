use std::io::{self, Write}; // require for flushing tty
use std::str::FromStr;

fn main() {
    print!("How old are you? ");
    io::stdout().flush().unwrap(); // flush tty
    let age = read_number();

    if age.is_some() {
        println!("You are {} years old.", age.unwrap());
    } else {
        eprintln!("Invalid age (accepted age: positive integer [0-255]).");
    }

    // alternative to using unwrap()
    // The if let Some(valid_age) = age does two things:
    // (1) attempts to assign the value inside age to valid_age
    // (2) checks if this was successful
    // in case the `if` check is positive, we have a new variable to use inside
    // the if block.
    if let Some(valid_age) = age {
        println!("You are {} years old.", valid_age);
    } else {
        eprintln!("Invalid age (accepted age: positive integer [0-255]).");
    }

    // using match
    match age {
        None => eprintln!("Invalid age (accepted age: positive integer [0-255])."),
        Some(valid_age) => println!("You are {} years old.", valid_age),
    }
}

fn read_string() -> String {
    let mut input = String::new();
    std::io::stdin()
        .read_line(&mut input)
        .expect("Could not read input.");
    input.trim().to_string()
}

fn read_number() -> Option<u8> {
    // Valid return values from Option<u8> are: Some(u8) or None
    let input = read_string();
    u8::from_str(&input).ok()
}
