// An attribute to hide warnings for unused code.
#![allow(dead_code)]

// enum with implicit discriminator (starts at 0)
#[derive(Debug)] // debug trait to print
                 // https://doc.rust-lang.org/rust-by-example/trait/derive.html
enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

// enum with explicit discriminator
enum Color {
    Red = 0xff0000,
    Green = 0x00ff00,
    Blue = 0x0000ff,
}

// enum can have methods
impl WeekDay {
    fn print_day(&self) {
        match self {
            // `self` indicates the value on which match applies
            // `Self` refers to type of `self` (Rust is case-sensitive)
            Self::Sunday => println!("Sunday"),
            Self::Monday => println!("Monday"),
            Self::Tuesday => println!("Tuesday"),
            Self::Wednesday => println!("Wednesday"),
            Self::Thursday => println!("Thursday"),
            Self::Friday => println!("Friday"),
            Self::Saturday => println!("Saturday"),
        }
    }
}

impl WeekDay {
    fn next_day(&self) -> WeekDay {
        let tmp = (*self as u8 + 1) % 7;
        let mut tomorrow = WeekDay::Sunday;

        // is there better way to convert integer discriminator to enum variant?
        match tmp {
            0 => tomorrow = WeekDay::Sunday,
            1 => tomorrow = WeekDay::Monday,
            2 => tomorrow = WeekDay::Tuesday,
            3 => tomorrow = WeekDay::Wednesday,
            4 => tomorrow = WeekDay::Thursday,
            5 => tomorrow = WeekDay::Friday,
            6 => tomorrow = WeekDay::Saturday,
            _ => eprintln!("This should not happen."),
        }

        tomorrow
    }

    fn day_after_tomorrow(&self) -> WeekDay {
        let tmp = (*self as u8 + 2) % 7;
        let mut after_tomorrow = WeekDay::Sunday;

        match tmp {
            0 => after_tomorrow = WeekDay::Sunday,
            1 => after_tomorrow = WeekDay::Monday,
            2 => after_tomorrow = WeekDay::Tuesday,
            3 => after_tomorrow = WeekDay::Wednesday,
            4 => after_tomorrow = WeekDay::Thursday,
            5 => after_tomorrow = WeekDay::Friday,
            6 => after_tomorrow = WeekDay::Saturday,
            _ => eprintln!("This should not happen."),
        }

        after_tomorrow
    }
}

// we could use Copy trait in the enum, in that case the value/ ownership
// won't be moved after passed into a function argument
// https://doc.rust-lang.org/rust-by-example/trait/derive.html
#[derive(Debug)]
enum LatitudeLongitude {
    Lat(f64),
    Lon(f64),
}

// Creates a type alias
type Location = LatitudeLongitude;

// using reference of argument so that the value is not move, and it can be used
// after function call
fn print_location(loc: &Location) {
    match loc {
        Location::Lat(lat_val) => println!("Lat: {}", lat_val),
        Location::Lon(lon_val) => println!("Lon: {}", lon_val),
    }
}

fn get_location(loc: &Location) -> f64 {
    let tmp;
    match loc {
        Location::Lat(lat_val) => tmp = *lat_val,
        Location::Lon(lon_val) => tmp = *lon_val,
    }

    tmp
}

fn main() {
    let today = WeekDay::Friday;
    println!("Today is {:?}", today);
    println!("{:?} as u8: {}", today, today as u8);
    println!("Tomorrow is {:?}", today.next_day());
    println!("Day after tomorrow is {:?}", today.day_after_tomorrow());

    today.print_day();

    let favorite_color = Color::Blue;
    println!("My favorite color is {:06x}", favorite_color as i32);

    let home_lat = Location::Lat(1.2);
    println!("Latitude: {:?}", home_lat);
    print_location(&home_lat);
    println!("Latitude = {}", get_location(&home_lat));
}
