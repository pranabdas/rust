fn main() {
    // declare a String data type, which will be stored in the heap
    let message = String::from("Welcome learning rust programming!");

    // if instead we passed `message` to the function, the ownership would
    // be transfer to the function scope and `message` reference would be
    // invalid thereafter
    let length = get_len(&message);
    // here we pass the only reference/pointer to the variable instead of the
    // actual variable, hence the ownership remains with the original variable
    println!("Message: {}", message);
    println!("Message length: {}", length);
}

fn get_len(input: &String) -> usize {
    let length = input.len();
    // note that length is in bytes, certain characters such as emojis can have
    // length more than one byte
    length
}
