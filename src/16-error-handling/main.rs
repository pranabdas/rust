fn main() {
    println!("8.0 / 3.0 = {:?}", divide(8.0, 3.0));
    println!("8.0 / 0.0 = {:?}", divide(8.0, 0.0));

    let result = divide(8.0, 3.0);
    println!("8.0 / 3.0 = {}", result.unwrap());
}

fn divide(numerator: f64, denominator: f64) -> Result<f64, String> {
    if denominator == 0.0 {
        Err(format!("Divide by zero"))
    } else {
        Ok(numerator / denominator)
    }
}
