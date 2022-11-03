#[derive(Debug)] // Debug trait is required for printing whole struct with
                 // debug formatter
struct User {
    name: String,
    age: u8,
    height: f32,
}

// by default the struct are stored in the stack memory, when there is String
// field the corresponding stack information (String pointer, length, capacity)
// is stored in the stack, while the actual string data is placed on the heap

#[derive(Debug)] // build another struct without String field for simplicity,
                 // which does not implement Copy trait by default
struct UserAlt {
    age: u8,
    height: f32,
}

fn main() {
    let user1 = User {
        // if needed use `mut` here
        name: String::from("Pranab"),
        age: 35,
        height: 185.0,
    };

    println!(
        "Height of {} = {} cm and age = {}",
        user1.name, user1.height, user1.age
    );

    let user2 = User {
        name: String::from("Pranab copy"),
        ..user1 // copy rest of the fields form user1, that are not explicitly
                // assigned
    };

    let user3 = User { age: 40, ..user1 };

    // let user4 = User {
    //     ..user1
    // };
    // this is problematic because it will move and transfer the ownership,
    // because the String field is heap data and does not have Copy trait

    println!("{:?}", user2);
    println!("{:?}", user3);

    let user_alt = UserAlt {
        age: 35,
        height: 185.0,
    };

    let mut user_alt2 = UserAlt { ..user_alt }; // this does not move the
                                                // ownership, as this struct has
                                                // Copy trait

    user_alt2.height = 190.0;

    println!("User alt: {}, {}", user_alt.age, user_alt.height);
    println!("User alt 2: {:?}", user_alt2);
}
