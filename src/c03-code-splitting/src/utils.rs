use std::str::FromStr;

// private function
fn read_string() -> String {
    let mut input = String::new();
    std::io::stdin()
        .read_line(&mut input)
        .expect("Could not read input.");
    input.trim().to_string()
}

pub fn read_number() -> Result<u8, String> {
    // Result can return one of two possible data types. It has this signature:
    // Result<[good_type], [bad_type]>
    let input = read_string();

    if input.is_empty() {
        Err("You did not enter any data".to_string())
    } else {
        u8::from_str(&input).or(Err("Invalid age (accepted age: positive \
            integer [0-255]).".to_string()))
    }
}
