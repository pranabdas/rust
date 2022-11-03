fn main() {
    let age = 25;

    match age {
        0..=9 => println!("child"),
        10..=17 => println!("teenager"),
        _ => println!("adult"), // default match
    }

    let message = match age {
        0..=9 => "you can only drink water",
        10..=17 => "you can have coke",
        _ => {
            // block with multiple statement
            println!("Default:");
            "you can have wine" // return value
        }
    };

    println!("{}", message);
}
