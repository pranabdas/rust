fn main() {
    let x = 5;

    let (y, z) = sq_n_cube(x);

    println!("{x}^2 = {y}\n{x}^3 = {z}");
}

fn sq_n_cube(x: i32) -> (i32, i32) {
    (x * x, x * x * x)
}
