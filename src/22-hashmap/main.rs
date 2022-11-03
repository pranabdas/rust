// hashmaps are similar to Python dictionary, it stores key value pairs, all
// the keys must have same datatype, while all the values must have common
// datatype as well
use std::collections::HashMap; // not included in prelude

fn main() {
    let mut users = HashMap::new();
    users.insert(1, "Pranab"); // first argument is key, and second is value
    users.insert(2, "Pulak");

    println!("users are: {:?}", users);

    // order should not be used to get HashMap elements
    let first_user = users.get(&1); // returns Option<T>
    println!("First user: {}", first_user.unwrap());

    // overwrite an entry
    users.insert(2, "Animesh");
    println!("Updated second user: {}", users.get(&2).unwrap());

    // update if does not exist
    users.entry(2).or_insert("Pulak"); // not updated as key 2 already exists
    println!("Second user: {}", users.get(&2).unwrap());

    users.entry(3).or_insert("Pulak"); // this also returns a reference to the value
    println!("Third user: {}", users.get(&3).unwrap());

    let new_user = users.entry(3).or_insert("Mintu"); // not updated as key already exists
    *new_user = "Mintu"; // we can deference and set new value
    println!("Updated third user: {}", users.get(&3).unwrap());
}
