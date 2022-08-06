fn main() {
    let age = 34;

    if age <= 0 {
        println!("Invalid input!");
    } else if age < 18 {
        println!("You are not adult.");
    } else if age < 65 {
        println!("You are adult.");
    } else {
        println!("You are senior citizen.");
    }

    // conditional variable assignment
    let logged_in = false;
    let message = if logged_in {
        "You are logged in."
    } else {
        "Please login."  // both values must have same type
    };
    println!("Hello user. {message}");
}
