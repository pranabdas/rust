// Box is used to store data in the heap
// By default integer values are stored in the stack, we can store them in the
// heap
// Use cases: (1) avoid copying large amount of stack data, (2) transfer
// ownership of data, (3) implement recursive types such as linked list
fn main() {
    let var: Box<i32> = Box::new(2);
    let var2 = Box::<f32>::new(5.4);

    println!("var = {}", var);
    println!("var2 = {}", var2);

    let var_increased = increase(var);
    println!("var_increased = {}", var_increased); // var transferred the
                                                   // ownership, cannot be
                                                   // called afterwards

    // println!("var = {}", var); // not allowed, value moved/borrowed

    let var2_increased = increase_float(&var2); // argument passed by reference
    println!("var2_increased = {}", var2_increased);
    println!("var2 = {}", var2); // previous value still have ownership
}

// let's write a function that increases var by 1
fn increase(num: Box<i32>) -> Box<i32> {
    Box::<i32>::from(*num + 1) // addition is not implemented for Box type, we
                               // first dereference the heap data, and return
                               // new Box<i32>
}

fn increase_float(num: &Box<f32>) -> Box<f32> {
    Box::<f32>::from(**num + 1.0)
    //                --- First dereference the Box, then it's value
}
