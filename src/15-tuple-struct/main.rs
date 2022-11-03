// they are defined using the `struct` keyword, order of members matter
struct Color(u8, u8, u8); // RGB

fn main() {
    let blue = Color(0, 0, 255);

    println!("Third value = {}", blue.2);
}
