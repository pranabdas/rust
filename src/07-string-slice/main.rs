fn main() {
    let message = String::from("Hello Rust!");
    let last_word = &message[6..];
    println!("Last word: {}", last_word);

    let last_word: &str = &message[6..6 + 4]; // slice has type &str (not same
                                              // as &String). String has
                                              // pointer, length, capacity
                                              // information, while str stores
                                              // pointer and length
    println!("Last word: {}", last_word);

    // string lengths are in bytes, there could be multi-byte UTF-8 characters,
    // slice must occur in valid string boundaries

    // array slicing
    let arr = [1, 3, 4, 5, 6];
    let arr_slice = &arr[..2]; // let arr_slice: &arr[i32] = &arr[..2];
    println!("array slice: {:?}", arr_slice);

    println!("First word: {}", get_first_word(&message));
}

fn get_first_word(s: &String) -> &str {
    let data = s.as_bytes();

    for (index, &val) in data.iter().enumerate() {
        if val == b' ' {
            return &s[..index];
        }
    }

    &s // no spaces found
}
