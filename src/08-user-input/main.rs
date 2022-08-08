use std::io;

fn main() {
    let mut name = String::new();
    println!("What's your name?");

    io::stdin()
        .read_line(&mut name)
        .expect("Failed to read input!");

    println!("Hello {}", name);
}
