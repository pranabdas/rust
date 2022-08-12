use std::fs;
use std::io::Write; // for appending content to file

fn main() {
    let mut planets = String::new();
    planets.push_str("Mercury\n");
    planets.push_str("Venus\n");
    planets.push_str("Earth\n");
    planets.push_str("Mars\n");
    planets.push_str("Jupyter\n");
    planets.push_str("Saturn\n");
    planets.push_str("Uranus\n");
    planets.push_str("Neptune\n");

    fs::write("planets.txt", planets);
    // this will replace the entire file if already exists
    // it works with the whole file, we can not append content
    // to an already existing file

    let mut file = fs::OpenOptions::new().append(true).open("planets.txt").unwrap();
    file.write(b"Pluto\n"); // notice the required byte prefix
}
