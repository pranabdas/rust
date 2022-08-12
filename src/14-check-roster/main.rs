// this program accepts two command line arguments: file name containing a list
// of names and a name to check if the name is present in the list
use std::env;
use std::fs;

fn main() {
    if env::args().len() < 3 {
        eprintln!("Requires two args: <file path> <name to search>");
        std::process::exit(1);
    }

    let file_path = env::args().nth(1).unwrap();
    let name = env::args().nth(2).unwrap();

    for person in fs::read_to_string(file_path).unwrap().lines() {
        if person == name {
            // we can improve the program to not differentiate case
            // test against all lowercase
            println!("Yes {name} did walk on the moon.");
            return;
        }
    }

    println!("{name} did not walk on the moon yet.");
}
