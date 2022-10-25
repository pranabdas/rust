fn main() {
    let n: i64 = 5;
    let ans: i64;
    ans = factorial(n);
    println!("Factorial({n}) = {ans}");

    assert_eq!(factorial(5), 120);
}

fn factorial(n: i64) -> i64 {
    if n <= 0 {
        return 1;
    }

    n * factorial(n - 1)
}
