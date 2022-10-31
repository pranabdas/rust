use std::error::Error;

fn main() {
    let x: i8 = 34; // i8 can hold integers from [-128, 127], there will be
                    // compile error if we assign out of range values
    let mut y: i8 = 52;

    let ans = add(x, y); // the program will panic during runtime if the result
                         // out of range
    println!("ans = {}", ans);

    let ans = add_with_option(x, y);

    match ans {
        // better to print the error to STDERR instead of STDOUT
        //./main 1> stdout.txt 2> stderr.txt
        None => eprintln!("Using Option: There was an error."),
        Some(valid_ans) => println!("ans = {}", valid_ans),
    }

    y = 120;
    let ans = add_with_option(x, y);

    match ans {
        None => eprintln!("Using Option: There was an error."),
        Some(valid_ans) => println!("ans = {}", valid_ans),
    }

    // Option<T> can be handled few other ways:
    // Option contains Some(val) or None

    // println!("{}", ans.unwrap()); // unwrap() gives val in case
    // of Some(val), or panics in case of None

    let ans = add_with_result(x, y);

    match ans {
        Err(_) => eprintln!("Using Result: Something went wrong."),
        Ok(val) => println!("ans = {}", val),
    }

    let ans = add_with_result2(x, y);

    match ans {
        Err(err) => eprintln!("{}", err),
        Ok(val) => println!("ans = {}", val),
    }

    let ans = add_with_result3(x, y);

    match ans {
        Err(err) => eprintln!("{}", err),
        Ok(val) => println!("ans = {}", val),
    }
}

fn add(x: i8, y: i8) -> i8 {
    x + y
}

fn add_with_option(x: i8, y: i8) -> Option<i8> {
    x.checked_add(y) // returns Some(value) or None in case case of overflow
                     // https://doc.rust-lang.org/std/primitive.i8.html#method.checked_add
}

fn add_with_result(x: i8, y: i8) -> Result<i8, ()> {
    (x.checked_add(y)).ok_or(()) // https://doc.rust-lang.org/std/primitive.unit.html
                                 // `()` empty tuple, , a zero-sized type (it
                                 // uses no memory). if nothing goes wrong,
                                 // there is no further value produced.
                                 // something like void perhaps
}

fn add_with_result2(x: i8, y: i8) -> Result<i8, String> {
    (x.checked_add(y)).ok_or("Error: failed to add.".to_string())
}

fn add_with_result3(x: i8, y: i8) -> Result<i8, Box<dyn Error>> {
    (x.checked_add(y)).ok_or(<Box<dyn Error> as From<&str>>::from("Error while adding"))
}
