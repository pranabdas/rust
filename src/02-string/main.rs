fn main() {
    let mut planet = String::from("Earth");
    // this assignment is different from string literal
    // String type stored in the heap and its size can be dynamically changed
    // a corresponding pointer, length, and capacity is stored in the stack
    // heap memory is requested to the memory allocator during runtime

    planet.push_str(" has one moon.");
    // if the heap needs to move the message to a new location in order to
    // accommodate the new size, it will also update the pointer address

    println!("{planet}");
    // once the variable that owns the heap memory goes out of scope, the
    // allocated memory is freed and return to the operating system/ allocator.
    // this is different from C and C++ where the developer has to explicitly
    // free/ delete the allocated memory, or Java where garbage collector looks
    // for unused memory and frees it periodically

    // in newer C++ standard, similar pattern (Resource Acquisition Is 
    // Initialization) is implemented (see, unique_pointer)

    let x: i32 = 5;
    let mut y: i32 = x; // value of x copied to y
    println!("x = {}, y = {}", x, y);

    y = 10;
    println!("x = {}, y = {}", x, y);

    // now look at what happens for a data that is stored in the heap
    let message = String::from("hello");
    let mut alt_message = message; // value of message is not copied here
                                   // the variable points to the same heap
                                   // location, we copy the information stored
                                   // in the stack i.e., pointer, length and
                                   // capacity to the new variable

    // after this statement the message variable goes out of scope, it is to
    // guarantee memory safety, otherwise there could be double drop 
    // (deallocation) calls

    // this is therefore move, not even a shallow copy, the previous variable
    // is invalid hereafter

    // Important: passing arguments to a function works the same way as
    // assigning variable
    alt_message.push_str(" world.");

    // println!("message: {}", message); // this will cause compile error
    println!("alt message: {}", alt_message);

    // in case we do want to make deep copy we can use clone method
    let mut alt_message2 = alt_message.clone();
    alt_message2.push_str(" Have a great day.");

    println!("alt message again: {}", alt_message);
    println!("alt message 2: {}", alt_message2);
}
