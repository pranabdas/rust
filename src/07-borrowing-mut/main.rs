fn main() {
    let mut message = String::from("Welcome learning rust programming!");

    // if we need to change the original variable use the keyword `mut`
    // there can be one and only one mutable reference preventing data races
    let length = get_len(&mut message);
    println!("Message: {}", message);
    println!("Message length: {}", length);
}

fn get_len(input: &mut String) -> usize {
    input.push_str(" Happy learning.");
    let length = input.len();
    length
}
