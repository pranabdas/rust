fn main() {
    let mut a: i32 = 3;
    let mut b: i32 = 7;

    println!("Before: a = {}, b = {}", a, b);

    swap(&mut a, &mut b);

    println!("After : a = {}, b = {}", a, b);
}

fn swap(a: &mut i32, b: &mut i32) {
    let tmp = a.clone();
    // use of raw pointer may be unsafe in terms of rust paradigm
    // https://doc.rust-lang.org/reference/types/pointer.html
    // maybe instead of changing the values in the calling environment, we can
    // return updated values, and let the caller handle ownership
    *a = b.clone();
    *b = tmp;
}
