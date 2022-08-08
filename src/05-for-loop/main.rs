fn main() {
    for number in (0..6).rev() {  
        // (0..6) is same as (0..=5)
        // increment by step (2..=10).step_by(2)
        println!("{number}");
    }
    println!("LIFTOFF!!!");
}
