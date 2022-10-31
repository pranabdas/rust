fn main() {
    let text_data = "2.3 4 5  7.5\t4\n2.1";
    let data_vec: Vec<&str> = text_data.split_ascii_whitespace().collect();
    // https://doc.rust-lang.org/stable/std/primitive.str.html#method.split_ascii_whitespace
    let data: Vec<f64> = data_vec
        .iter()
        .map(|x| x.parse().unwrap()) // .map(|x| x.parse::<f64>().unwrap())
        .collect();

    for i in &data {
        println!("{}", i);
    }

    let filtered_data = data.iter().filter(|x| **x > 3.0f64).collect::<Vec<_>>();
    // the input of the filter closure takes a reference, we need to dereference
    // the value, in case of vector need twice

    println!("\nItems greater than 3:");
    println!("{:?}", filtered_data);

    let numbers: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let even_numbers = numbers
        .into_iter()
        .filter(|n| n % 2 == 0)
        .collect::<Vec<_>>();

    println!("\nEven numbers:");
    println!("{:?}", even_numbers);

    let cities = vec!["Mumbai", "Singapore", "munich", "Tokyo", "London"];

    let cities_starts_with_m = cities
        .into_iter()
        .filter(|n| n.starts_with("M") || n.starts_with("m"))
        //                              --- OR operator
        .collect::<Vec<_>>();

    println!("\nCity names starts with M:");
    println!("{:?}", cities_starts_with_m);
}
