#[derive(Debug)] // required for printing whole struct

struct User {
    name: String,
    age: u8,
    height: f32,
}

fn main() {
    let user1 = User { // if needed use `mut` here
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
        ..user1 // copy rest of the field form user1
    };

    let user3 = User {
        age: 40,
        ..user1
    };

    // let user4 = User {
    //     ..user1
    // };
    // this is problematic because it will transfer the ownership

    println!("{:?}", user2);
    println!("{:?}", user3);
}
