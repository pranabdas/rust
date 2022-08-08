fn main() {
    let data = (35, 185, "Pranab");
    let first_item = data.0;

    println!("First element of the tuple = {}", first_item);
    println!("data = {:?}", data);    

    // destructuring
    let (age, height, name) = data;
    println!("Name: {name}, Age = {age}, Height = {height}");
}
