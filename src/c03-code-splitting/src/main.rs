use std::io::{self, Write}; // require for flushing tty

mod utils;
use utils::read_number;

fn main() {
    print!("How old are you? ");
    io::stdout().flush().unwrap(); // flush tty

    match read_number() {
        Ok(age) => println!("You are {} years old.", age),
        Err(err) => println!("{}", err),
    }
}
