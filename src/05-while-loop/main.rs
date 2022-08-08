use std::thread::sleep;
use std::time::Duration;

fn main() {
    let mut count = 5;
    let time = Duration::from_secs(1);

    while count > 0 {
        println!("{count}");
        sleep(time);
        count -= 1;
    }

    println!("LIFTOFF!!!");
}
