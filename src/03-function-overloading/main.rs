// this code does not compile: overloading does not work in rust
// we can use generics instead (see 03-function-generics)
fn main() {
    let a = 4;
    let b = 8;

    println!("{} + {} = {}", a, b, add(a, b));

    let c = 3.4;
    let d = 4.5;
    println!("{} + {} = {}", c, d, add(c, d));
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn add(a: f64, b: f64) -> f64 {
    a + b
}
