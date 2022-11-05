// we can define functionalities called traits of a datatype. When a datatype
// implements a trait, they implements certain methods so that we can perform
// certain operation on those datatype (e.g., copy value instead of transferring
// ownership while assigning or passing as function argument, compare two values
// using <, >, or == operators)

// Derivable traits: Eq, PartialEq, Ord, PartialOrd, Clone, Copy, Hash, Default,
// Debug

// #[derive(PartialEq)] // equality (==): in case of struct two instances are
// same if all fields are equal
// #[derive(PartialOrd)] // greater or less than

// implementation of Display trait for custom data type:
struct Complex {
    re: f64,
    im: f64,
}

impl std::fmt::Display for Complex {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(
            f,
            "{} {} {}i",
            self.re,
            if self.im >= 0. { '+' } else { '-' },
            self.im.abs()
        )
    }
}

fn main() {
    println!("{}", Complex { re: 1.0, im: 3.2 });
    println!("{}", Complex { re: 0.0, im: -3.2 });
    println!("{}", Complex { re: -0.5, im: 0.0 });
}
