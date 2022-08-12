use std::fs;

fn main() {
    let contents = fs::read_to_string("weekdays.txt").unwrap();
    // this reads the whole file into a single string
    println!("Content in the weekday.txt: \n{contents}");

    // we can process each line separately
    let mut index: i32 = 1;
    for line in contents.lines() {
        println!("line {index} is {line}");
        index += 1;
    }
}
