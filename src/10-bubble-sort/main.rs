use std::io::{self, Write};

fn main() {
    println!("This program takes arbitrary number of integers and sorts them.");

    let mut size = String::new();
    print!("How many numbers do you need to sort? ");
    io::stdout().flush().unwrap();

    io::stdin()
        .read_line(&mut size)
        .expect("Failed to read input!");

    let size: i32 = size.trim().parse().expect("Please type a number!");
    let mut input_vec: Vec<i32> = Vec::new();

    for i in 0..size {
        print!("Enter item {}: ", i + 1);
        io::stdout().flush().unwrap();

        let mut input = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read input!");
        let input: i32 = input.trim().parse().expect("Please type a number!");

        input_vec.push(input);
    }

    println!("Input : {:?}", input_vec);

    let output_vec = bubble_sort(input_vec);
    println!("Sorted output: {:?}", output_vec);
}

fn bubble_sort(mut input_vec: Vec<i32>) -> Vec<i32> {
    for i in 0..input_vec.len() {
        for j in 0..input_vec.len() - 1 - i {
            if input_vec[j] > input_vec[j + 1] {
                input_vec.swap(j, j + 1);
            }
        }
    }

    input_vec
}
