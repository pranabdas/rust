fn main() {
    let mut message = String::from("Welcome learning rust programming!");

    // if we need to change the original variable use the keyword `mut`
    // there can be one and only one mutable reference preventing data races
    let length = get_len(&mut message); // there can be only one reference, if
                                        // it has mutable reference (to prevent
                                        // data races, where multiple references
                                        // try to modify the same data at the
                                        // same time)
                                        // let ref1 = &mut var1;
                                        // let ref4 = &var1; // Not allowed,
                                        // whether mutable
                                        // or not
                                        // let ref2 = &var2;
                                        // let ref3 = &var3; // OK
    println!("Message: {}", message);
    println!("Message length: {}", length);
}

fn get_len(input: &mut String) -> usize {
    input.push_str(" Happy learning.");
    let length = input.len();
    length
}
