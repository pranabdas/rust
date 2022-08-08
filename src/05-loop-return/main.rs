fn main() {
    // loop with return value
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 5 {
            break counter;
        }
    };

    println!("Count exited at {}", result);
}
