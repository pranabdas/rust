fn main() {
    let age = 34; // by default variables are immutable
    println!("I'm {} years old.", age);

    // need to explicitly declare mutable variables with keyword mut
    let mut x = 10;
    println!("My variable = {}", x);

    x = 10 + 5; // rust will automatically try to infer the type from assignment
    println!("My variable = {}", x);
    type_of(&x); // this is i32

    let a = 5;
    let b = 6;
    type_of(&a); // type of `a` and `b` will be converted to u8 because of the
                 // following statement
    let c: u8 = a + b; // rust compiler is smart enough to convert previous
                       // assignments data types
    type_of(&c);

    const PI: f64 = 3.14159; // mut keyword is not allowed with const
    println!("Pi * 2 = {}", PI * 2.0); // int cannot be multiplied by float

    // variable shadowing
    let spaces = "   ";

    // it is allowed to declare variables with same name shadowing the previous
    // variable with the same name
    let spaces = spaces.len(); // notice data type is different too

    {
        let spaces = spaces * 2;
        println!("double spaces length (inner scope) = {spaces}");
    }

    println!("spaces length (outer scope) = {spaces}");

    // if a variable is declared but never used, use `_` prefix to hide warnings
    // we can just use `_` naming for throwaway variable (note that isolated `_`
    // cannot be used in any expression while `_name` can be)

    // underscores in numeric literals for better readability
    // can be used for int, float, hexadecimal, and other formats
    // let binary = 0b_0110_1001_1111_0001;
    println!("2 million: {}", 2_000_000);

    // static declaration (not used extensively)
    // type declaration is must for static
    // static values are always immutable
    // uses static allocation (in contrast to stack allocation)
    // style guide: use capital letters for static variables (separated with
    // underscores)
    static NO_WEEK_DAYS: i32 = 7;
    println!("No of days in a week = {}", NO_WEEK_DAYS);
}

// helper function to print type of a variable
fn type_of<T>(_: &T) {
    println!("Type: {}", std::any::type_name::<T>())
}

