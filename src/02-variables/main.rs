fn main() {
    let age = 34; // by default variables are immutable
    println!("I'm {} years old.", age);

    // need to explicitly declare mutable variables with keyword mut
    let mut x = 10;
    println!("My variable = {}", x);

    x = 10 + 5;
    println!("My variable = {}", x);

    const PI: f64 = 3.14159; // mut keyword is not allowed with const
    println!("Pi * 2 = {}", PI * 2);

    // variable shadowing
    let spaces = "   ";

    // it is allowed to declare variables with same name shadowing the previous
    // variable with the same name
    let spaces = spaces.len(); // notice data type is different too

    {
        let spaces = spaces * 2;
        println!("double spaces (inner scope) = {spaces}");
    }

    println!("spaces (outer scope) =  {spaces}");

    // if a variable is declared but never used, use _ prefix to hide warnings
}
