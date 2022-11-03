fn main() {
    let data = (35, 185, "Pranab"); // order of elements in a tuple matters
    let first_item = data.0;

    println!("First element of the tuple = {}", first_item);
    println!("data = {:?}", data); // print whole tuple using debug formatter

    // destructuring
    let (age, height, name) = data;
    println!("Name: {name}, Age = {age}, Height = {height}");
}
