// https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator
use std::error::Error;

// this is an example of error propagation from one function to another
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let x: i8 = 45;
    let mut y: i8 = 34;

    let ans = add(x, y)?; // since the ? operator returns Error (if there is
                          // one), we need return type in main()
    println!("ans = {}", ans);

    y = 100;
    let ans = add(x, y)?;
    println!("ans = {}", ans);

    Ok(()) // in case of no error, we return empty tuple
}

fn add(x: i8, y: i8) -> Result<i8, Box<dyn Error>> {
    (x.checked_add(y)).ok_or(<Box<dyn Error> as From<&str>>::from("could not add"))
}
