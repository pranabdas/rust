use std::ops::Add;

fn main() {
    let a: i32 = 12;
    let b: i32 = 15;

    let ans = add(a, b);
    println!("{a} +  {b}  =  {ans}");

    let x: f64 = 7.4;
    let y: f64 = 2.3;

    let ans = add(x, y); // shadowing previous ans
    println!("{x} + {y}  =  {ans}");

    println!("{} + {} = {}", 2.4, 9.3, add(2.4f32, 9.3f32));
}

fn add<T: Add<Output = T> + Copy>(input1: T, input2: T) -> T {
    input1 + input2
}
