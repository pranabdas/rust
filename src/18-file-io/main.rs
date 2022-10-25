use std::fs::{read_to_string, write};

fn main() {
    let mut data = String::new();

    for i in 1..=10 {
        let tmp = (i).to_string();
        data.push_str(&tmp);
        data.push_str("\n");
    }

    // write("data.txt", data);
    match write_data(data) {
        Ok(_) => println!("data.txt was written successfully"),
        Err(err) => println!("There was error while writing data.txt: {}", err),
    }

    match read_data() {
        Ok(data_copy) => println!("{:?}", data_copy),
        Err(err) => println!("There was error while reading data.txt: {}", err),
    }
}

fn write_data(data: String) -> std::io::Result<()> {
    write("data.txt", data)
}

fn read_data() -> Result<Vec<i32>, std::io::Error> {
    let input = read_to_string("data.txt")?;
    // Notice the ? at the end of the line. It will check the result of the
    // preceding method. If there is an error it will exit out of the function,
    // retuning the error. Otherwise it will assign the value in the Ok to the
    // variable. So the ? is like a match block in disguise.

    let lines = input.lines();
    // let lines = input.split("\n"); // has issues to convert into number
    let mut data = vec![];

    // data = lines.collect();
    for val in lines {
        let tmp = val.parse::<i32>().unwrap();
        data.push(tmp);
    }

    Ok(data)
}
