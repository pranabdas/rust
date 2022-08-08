fn main() {
    let mut planet = String::from("Earth");
    // this assignment is different from string literal
    // String type stored in the heap and its size can be dynamically changed
    // a corresponding pointer, len, and capacity is stored in the stack
    planet.push_str(" has one moon.");
    // if the heap needs to move the message to a new location in order to
    // accommodate the new size, it will also update the pointer address
    println!("{planet}");
}
