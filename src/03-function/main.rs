fn main() {
    let x = 3;
    let y = 4;
    let result = add(x, y);
    println!("{x} + {y} = {result}");
}

fn add(input1: i32, input2: i32) -> i32 {
    input1 + input2 // notice the omission of `;` at the end.
                    // last statement implicitly returns, and equivalent to
                    // return input1 + input2;
}
