use std::cmp::Ordering;

fn main() {
    let mut arr = [2, 4, 5, 8, 1, 23];
    let desc = |a: &i32, b: &i32| -> Ordering {
        if a < b {
            Ordering::Greater
        } else if a > b {
            Ordering::Less
        } else {
            Ordering::Equal
        }
    };

    arr.sort_by(desc);
    println!("{:?}", arr);

    // we can simplify the above declaration
    let mut arr = [2, 4, 5, 8, 1, 23];
    arr.sort_by(|a, b| { // curly braces not required in case of single statement
        if a < b {
            Ordering::Greater
        } else if a > b {
            Ordering::Less
        } else {
            Ordering::Equal
        }
    });

    println!("{:?}", arr);

    // more concise form
    let mut arr = [2, 4, 5, 8, 1, 23];
    arr.sort_by(|a, b| b.cmp(a)); // reverse: arr.sort_by(|a, b| a.cmp(b));
    println!("{:?}", arr);

    // using function
    let mut arr = [2, 4, 5, 8, 1, 23];
    arr.sort_by(fn_desc);
    println!("{:?}", arr);

    // note that array .sort() method does not require a function input, however
    // it only sort by ascending order
    let mut arr = [2, 4, 5, 8, 1, 23];
    arr.sort();
    println!("{:?}", arr);
}

// the above closure is equivalent to
fn fn_desc(a: &i32, b: &i32) -> Ordering {
    if a < b {
        Ordering::Greater
    } else if a > b {
        Ordering::Less
    } else {
        Ordering::Equal
    }
}
