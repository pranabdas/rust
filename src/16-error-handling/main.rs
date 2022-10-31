fn main() {
    println!("8.0 / 3.0 = {:?}", divide(8.0, 3.0));
    println!("8.0 / 0.0 = {:?}", divide(8.0, 0.0));

    let result = divide(8.0, 3.0);
    println!("8.0 / 3.0 = {}", result.unwrap());

    // unwrap() will panic in case Err received
    // better way to handle the Result struct using match statement
    let result = divide(5.0, 3.0);
    match result {
        Ok(val) => println!("Result = {}", val),
        Err(e) => eprintln!("There was an error: {}", e),
        // print error to STDERR instead of STDOUT
        // ./main 1> stdout.txt 2> stderr.txt
    }

    let result = divide(1.0, 0.0);
    match result {
        Ok(val) => println!("Result = {}", val),
        Err(e) => eprintln!("There was an error: {}", e),
    }
}

fn divide(numerator: f64, denominator: f64) -> Result<f64, String> {
    if denominator == 0.0 {
        Err(format!("Divide by zero"))
    } else {
        Ok(numerator / denominator)
    }
}
