use std::io;

fn main() {
    println!("Enter radius: ");
    let mut radius = String::new();

    io::stdin()
        .read_line(&mut radius)
        .expect("Failed to read input!");

    let radius: f64 = radius.trim().parse().expect("Please type a number!");
    const PI: f64 = 3.14159;
    let area = PI * radius * radius;

    println!("Area = {area}");
}
