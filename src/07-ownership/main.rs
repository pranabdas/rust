fn main() {
    // the ownership is transferred in case of heap data (where the data type
    // does not have copy trait). Data types with copy trait is copied when
    // assigned to another variable or passed as function argument
    let message1: String;
    let message3: String;

    {
        let message2 = String::from("Hello Rust.");
        println!("Inside block (message2): {}", message2);

        message1 = message2; // value is moved, ownership is transferred
                             // same data on the heap. other than assignment,
                             // ownership is also transferred if the value is
                             // passed as a function argument. It can be
                             // captured to another variable as function return.
                             // Otherwise the value will be dropped as the
                             // function goes out of scope. There can be one and
                             // one owner a single copy of heap data.
                             // println!("{}", message2); // would be invalid access

        let mut message4 = String::from("How are you?");
        message3 = message4.clone(); // value is duplicated (deep copy)
                                     // two separate copies of data in the heap
        println!("Inside block (message4): {}", message4); // ownership still remains
        message4.clear(); // we could even clear message4, which won't affect
                          // message3 (the variable must be mutable in order to
                          // clear/change)
        println!("message4 after cleared: {}", message4);
    } // message2 and message4 goes out of scope and dropped

    println!("Outside block (message1, moved message2): {}", message1);
    println!("Outside block (message3, cloned message4): {}", message3);
}
