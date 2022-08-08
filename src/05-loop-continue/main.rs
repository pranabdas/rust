fn main() {
    // loop, break and continue
    let mut count = 0;

    loop {
        count += 1;

        if count % 2 == 0 {
            println!("{count}"); // prints only even numbers
            continue; // this skips the rest of the block
        }

        if count > 10 {
            break;
        }
    }
}
