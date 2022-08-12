use std::env; // this module is not included in the std prelude

fn main() {
    if env::args().len() <= 1 {
        println!("This program requires at least one argument.");
        return;
    }

    for (index, args) in env::args().enumerate() {
        println!("{args} is argument no. {index}");
    }

    let arg1 = env::args().nth(1).unwrap();
    println!("arg1 is {arg1}");
}
