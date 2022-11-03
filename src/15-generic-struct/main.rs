#[derive(Debug)]
struct Rectangle<T> {
    width: T,
    height: T,
}

#[derive(Debug)]
struct Rectangle2<T, U> {
    width: T,
    height: U,
}

impl<T, U> Rectangle2<T, U> {
    fn get_width(&self) -> &T {
        &self.width // we will return reference, in case the type is String
                    // otherwise there will problem with ownership
    }
}

// we can have methods with concrete/specific type
impl Rectangle2<i32, f64> {
    fn get_area(&self) -> f64 {
        (self.width as f64) * self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 400,
        height: 600,
    };

    let rect2 = Rectangle {
        width: 400.5,
        height: 600.5,
    };

    let rect3 = Rectangle2 {
        width: 400,
        height: 600.5,
    };

    println!("rect1: {}x{}", rect1.width, rect1.height);
    println!("rect2: {}x{}", rect2.width, rect2.height);
    println!("rect3: {}x{}", rect3.width, rect3.height);
    println!("rect3 width = {}", rect3.get_width());
    println!("rect3 area = {}", rect3.get_area());
}
