// run tests: cargo test
fn main() {
    let result = add(5, 4);
    println!("{} + {} = {}", 5, 4, result);

    let radius = 2.0;
    let area = area_circle(radius);
    println!(
        "Area of circle with radius {} unit = {} sq. unit",
        radius, area
    );
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn area_circle(r: f64) -> f64 {
    std::f64::consts::PI * r * r
}

// unit test code is placed on the same file as the source code
#[cfg(test)]
mod unit_tests {
    use super::*;

    #[test]
    fn ut_add() {
        assert_eq!(add(2, 2), 4);
        assert_eq!(add(20, 25), 45);
    }

    #[test]
    fn ut_circle_area() {
        assert!((area_circle(1.0) - std::f64::consts::PI) < 1e-11);
        // do not test strict equality for floating point numbers due to finite
        // precision
        assert!((area_circle(10.0) - std::f64::consts::PI * 100.0) < 1e-11);
    }
}
