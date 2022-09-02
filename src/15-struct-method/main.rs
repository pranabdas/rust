struct Rectangle {
    width: i32,
    height: i32,
}

impl Rectangle {
    fn area(&self) -> i32 {
        self.width * self.height
    }
}

fn main() {
    let laptop_screen = Rectangle {
        width: 1280,
        height: 800,
    };

    println!("Area of screen = {}", laptop_screen.area());
}
