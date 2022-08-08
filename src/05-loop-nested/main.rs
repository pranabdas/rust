fn main() {
    let mut count = 0;

    'outer: loop {
        println!("hello form outer loop");

        'inner: loop {
            // this loop label is not used
            println!("hello form inner loop");
            count += 1;

            if count == 2 {
                break 'outer; // This breaks the outer loop
            }
        }
    }
    println!("Good bye from outer loop");
}
