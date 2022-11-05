// hashmaps are similar to Python dictionary, it stores key value pairs, all
// the keys must have same datatype, while all the values must have common
// datatype as well
// https://doc.rust-lang.org/std/collections/struct.HashMap.html
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

    users.remove(&3);
    if !users.contains_key(&3) {
        println!("We've got {} users, but none with key 3", users.len());
    }

    // Look up the values associated with some keys.
    let keys = [1, 2, 3];
    for key in keys {
        match users.get(&key) {
            Some(val) => println!("{key}: {val}"),
            None => println!("{key}: not present."),
        }
    }

    // Iterate over everything.
    for (key, val) in &users {
        println!("{key}: \"{val}\"");
    }

    for val in users.values() {
        println!("{val}");
    }

    // HashMap with known list of items can be initialized from an array
    let solar_distance = HashMap::from([
        ("Mercury", 0.4),
        ("Venus", 0.7),
        ("Earth", 1.0),
        ("Mars", 1.5),
    ]);

    let planets: Vec<&str> = solar_distance.into_keys().collect();

    for planet in &planets {
        println!("{}", planet);
    }
    // TODO: sort keys by value
}
