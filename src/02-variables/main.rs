/*******************************************************************************
Program: Assigning variables
Author: Pranab Das
Version: 20210430
*******************************************************************************/
fn main() {
    let my_age = 34;  // by default variables are immutable
    println!("I'm {} years old.", my_age);

    let mut my_var = 10;  // need to explicitly declare mutable variables
    println!("My variable = {}", my_var);

    my_var = 10 + 5;
    println!("My variable = {}", my_var);
}
