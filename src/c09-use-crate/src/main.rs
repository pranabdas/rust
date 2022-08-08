// use rand;
// use rand::random;
// use rand::{thread_rng, Rng};
use rand::prelude::*;

fn main() {
    let number = random::<f64>();
    println!("{number}");

    let number = thread_rng().gen_range(1..11);
    println!("{number}");
}
