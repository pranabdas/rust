use std::cmp::Ordering;

fn main() {
    let mut arr = [2, 4, 5, 8, 1, 23];
    let desc = |a: &i32, b: &i32| -> Ordering {
        if a < b {
            Ordering::Greater
        } else if a > b {
            Ordering::Less
        } else {
            Ordering::Equal
        }
    };

    arr.sort_by(desc);
    println!("{:?}", arr);
}
