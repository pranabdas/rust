#[derive(Debug)]
struct Rectangle {
    width: i32,
    height: i32,
}

impl Rectangle {
    // first parameter of method is the Struct itself
    fn area(&self) -> i32 {
        self.width * self.height
    }

    fn increase_width(&mut self, delta_w: i32) {
        self.width += delta_w;
    }

    // associated function (similar to constructor), does not have self as first
    // parameter
    fn new(new_width: i32, new_height: i32) -> Rectangle {
        Rectangle {
            width: new_width,
            height: new_height,
        }
    }
}

fn main() {
    let mut laptop_screen = Rectangle {
        width: 1280,
        height: 800,
    };

    println!("Area of screen = {}", laptop_screen.area());

    laptop_screen.increase_width(120);
    println!("New screen width = {}", laptop_screen.width);

    let phone_screen = Rectangle::new(400, 600);
    println!(
        "Phone screen size: {}x{}",
        phone_screen.width, phone_screen.height
    );
}
