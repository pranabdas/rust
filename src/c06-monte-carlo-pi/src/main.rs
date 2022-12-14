// https://github.com/rust-random/rand/blob/master/examples/monte-carlo.rs
// # Monte Carlo estimation of π
//
// Imagine that we have a square with sides of length 2 and a unit circle
// (radius = 1), both centered at the origin. The areas are:
//
// ```text
//     area of circle  = πr² = π * r * r = π
//     area of square  = 2² = 4
// ```
//
// The circle is entirely within the square, so if we sample many points
// randomly from the square, roughly π / 4 of them should be inside the circle.
//
// We can use the above fact to estimate the value of π: pick many points in
// the square at random, calculate the fraction that fall within the circle,
// and multiply this fraction by 4.
use rand::distributions::{Distribution, Uniform};
// https://rust-random.github.io/book/

fn main() {
    let range = Uniform::new(-1.0f64, 1.0);
    let mut rng = rand::thread_rng();

    let total = 1_000_000;
    let mut in_circle = 0;

    for _ in 0..total {
        let a = range.sample(&mut rng);
        let b = range.sample(&mut rng);
        if a * a + b * b <= 1.0 {
            in_circle += 1;
        }
    }

    println!(
        "π is approximately {}",
        4.0 * (in_circle as f64) / (total as f64)
    );

    println!("π = {}", 4.0 * (1.0_f64).atan());
    println!("π = {}", std::f64::consts::PI); // alternative way to get value
                                               // of PI
}
