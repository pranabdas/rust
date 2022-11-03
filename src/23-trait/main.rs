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
