// calculation for integers even exceeding 128 bits are possible with BigInt
// likely it stores digits in a vector
// https://crates.io/crates/num-bigint
use num_bigint::{BigInt, ToBigInt};

fn main() {
    println!("{}! = {}", 50, factorial(50));
}

fn factorial(x: i32) -> BigInt {
    if let Some(mut factorial) = 1.to_bigint() {
        for i in 1..=x {
            factorial = factorial * i;
        }
        factorial
    }
    else {
        panic!("Failed to calculate factorial!");
    }
}
