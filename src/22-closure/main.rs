// https://rust-classes.com/chapter_5_1.html
// https://doc.rust-lang.org/book/ch13-01-closures.html
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let capitalize = |value: &str| value.to_uppercase();
    println!("{}", capitalize("Rust"));
    println!("{}", capitalize("hello"));

    let mut list = [
        Rectangle {
            width: 10,
            height: 1,
        },
        Rectangle {
            width: 3,
            height: 5,
        },
        Rectangle {
            width: 7,
            height: 12,
        },
    ];

    list.sort_by_key(|r| r.width); // closure takes r and returns r.width
    println!("{:#?}", list);
}
