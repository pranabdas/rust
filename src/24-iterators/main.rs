fn main() {
    let arr = [4, 5, 7, 2, 9];

    println!("Using for loop with range:");
    for i in 0..arr.len() {
        println!("a[{}] = {}", i, arr[i]);
    }

    println!("\nUsing array iterator:");
    for item in arr.iter() {
        println!("{}", item);
    }

    println!("\nUsing array iterator with index:");
    for (index, item) in arr.iter().enumerate() {
        println!("a[{}] = {}", index, item);
    }

    // string iterator
    let s = "#A 🦊"; // note that rust encodes string in UTF-8, there could be
                     // characters taking up more than 1 byte space, in that
                     // case the byte index is not the correct way to get
                     // characters
    for i in 0..s.len() {
        println!("{}: {}", i, s.as_bytes()[i]); // fox emoji takes up 4 bytes
    }

    let chars: std::str::Chars = s.chars();
    for ch in chars {
        println!("\"{}\"", ch);
    }

    let chars: std::str::Chars = s.chars();
    let fourth = chars.clone().nth(3); // without clone(), after nth() applied
                                       // chars become empty (must be mutable)

    println!("Forth character: {}", fourth.unwrap());

    // filters
    println!(
        "Is there any element grater than 3? {}",
        arr.iter().any(|n| *n > 3)
    );

    println!(
        "Is there any element equal to 3? {}",
        arr.iter().any(|n| *n == 3)
    );

    println!(
        "All items is greater than 3? {:?}",
        arr.iter().all(|n| *n > 3)
    );

    println!(
        "Sum of all items = {}",
        arr.iter().sum::<i32>() // let sum: i32 = arr.iter().sum()
    );

    match arr.iter().min() {
        Some(val) => println!("Smallest element = {}", val),
        None => (),
    }

    match arr.iter().max() {
        Some(val) => println!("Largest element = {}", val),
        None => (),
    }

    println!("\nElements greater than 3:");
    for item in arr.iter().filter(|n| **n > 3) {
        println!("{}", item);
    }

    println!("\nDouble elements using map");
    for item in arr.iter().map(|x| *x * 2) {
        println!("{}", item);
    }

    // collect
    let v = arr.iter().collect::<Vec<&i32>>();
    let v = arr.iter().collect::<Vec<_>>(); // compiler can infer type
    let v: Vec<_> = arr.iter().collect();

    let mut v = vec![];
    for i in 0..arr.len() {
        if arr[i] > 3 {
            v.push(arr[i]);
        }
    }

    println!("{:?}", v);

    let mut v = vec![];
    for item in arr.iter() {
        if *item > 3 {
            v.push(item);
        }
    }

    println!("{:?}", v);

    // iterator chains
    let mut v = vec![];
    for x in arr.iter().filter(|n| **n > 3).map(|n| *n * 2) {
        v.push(x);
    }

    println!("{:?}", v);

    // even better
    let v: Vec<_> = arr.iter().filter(|n| **n > 3).map(|n| *n * 2).collect();
    println!("{:?}", v);
}
