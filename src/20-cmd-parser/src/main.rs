extern crate structopt;
use structopt::StructOpt;

#[derive(StructOpt)]
struct Options {
    name: String,

    #[structopt(short = "v", long = "veg")]
    veg: bool,

    #[structopt(short = "a", long = "age")]
    age: Option<u8>,
}

fn main() {
    let options = Options::from_args();
    let name = options.name;

    let meal_option = if options.veg {
        "vegetarian"
    } else {
        "non-vegetarian"
    };
    println!("Hello {}.", name);
    println!("You have selected {} meal.", meal_option);

    match &options.age {
        Some(val) => println!("You are {} years old.", val),
        None => {}
    }
}
