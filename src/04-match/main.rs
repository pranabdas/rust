fn main() {
    let age = 25;

    match age {
        0..=9 => println!("child"),
        10..=17 => println!("teenager"),
        _ => println!("adult"),
    }

    let message = match age {
        0..=9 => "you can only drink water",
        10..=17 => "you can have coke",
        _ => "you can have wine",
    };

    println!("{}", message);
}
