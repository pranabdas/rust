fn main() {
    // declare a String data type, which will be stored in the heap
    let message = String::from("Welcome learning rust programming!");

    // if instead we passed `message` to the function, the ownership would
    // be transfer to the function scope and `message` reference would be
    // invalid thereafter
    let length = get_len(&message);
    // here we pass the only reference/pointer to the variable instead of the
    // actual variable, hence the ownership remains with the original variable

    // note that ownership will be passed to the calling function (if not passed
    // by reference) for the data types that does not have Copy trait. For data
    // types such as i32, f64 with Copy trait, the value will be copied
    println!("Message: {}", message);
    println!("Message length: {}", length);

    // ownership transferred for types without Copy trait, data types with copy
    // trait is simply copied to the function stack
    let x = 5;
    let y = increase(x);
    println!("x = {}, y = {}", x, y); // x still can be used after function call
}

fn get_len(input: &String) -> usize {
    let length = input.len();
    // note that length is in bytes, certain characters such as emojis can have
    // length more than one byte
    length
}

fn increase(input: i32) -> i32 {
    input + 1
}
