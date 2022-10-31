fn main() {
    let mut a: i32 = 3;
    let mut b: i32 = 7;

    println!("Before: a = {}, b = {}", a, b);

    swap(&mut a, &mut b);
    println!("After : a = {}, b = {}", a, b);

    println!("{}", &a); // this prints value of `a` (not memory address)
    increase(&mut a);
    println!("{}", a);

    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);
}

fn swap(a: &mut i32, b: &mut i32) {
    let tmp = a.clone();
    // https://doc.rust-lang.org/reference/types/pointer.html
    // alternatively, instead of changing the values in the calling environment,
    // we can return updated values, and let the caller handle ownership
    *a = b.clone();
    *b = tmp;
}

fn increase(a: &mut i32) {
    *a = *a + 1; // here `a` has type `& i32` and cannot operate `+` with `i32`
}

fn change(s: &mut String) {
    s.push_str(" world"); // this is a heap data, do not need dereferencing *
    // https://doc.rust-lang.org/book/ch15-00-smart-pointers.html
    // String is an example of smart pointer, they are structs with `Deref` and
    // `Drop` traits. `Deref` allows them to be used as smart pointers or
    // references. The `Drop` trait allows you to customize the code that's run
    // when an instance of the smart pointer goes out of scope.
}
