// bit shifting hacks

// a struct to hold year, month, day
struct Date {
    year: u32,
    month: u32,
    day: u32,
}

fn main() {
    let mut x = 5;
    println!("{0} => {0:b}", x);

    // let's shift 1 bit towards left is equivalent of doubling
    // x << 3 results in x * 2^3
    x = x << 2;
    println!("{0} => {0:b}", x);

    let today: Date = Date {
        year: 2022,
        month: 10,
        day: 25,
    };

    // Date object does not have Copy trait implemented, the ownership will be
    // transferred/ moved to the function if not passed by reference

    //  Note: this Struct objects are stored in stack (not in heap)
    let enc_date = encode_date(&today);
    println!("Encoded date: {0} => {0:b}", enc_date);
    println!("Encoded year: {0} => {0:b}", today.year);
    println!("Encoded month: {0} => {0:b}", today.month);
    println!("Encoded day: {0} => {0:b}", today.day);

    let dec_date = decode_date(enc_date);
    println!("Decoded date: {}-{}-{}", dec_date.year, dec_date.month, dec_date.day);
}

// we do not need ownership fo input date argument, we will pass by reference
// so the ownership will stay with the calling environment, the date value can
// be used after the function call
fn encode_date(date: &Date) -> u32 {
    (((date.year << 4) + date.month) << 5) + date.day
    //  |                    |
    //  |                    next (year << 4 + moth) shifted 5 bits for day
    // first year is shifted 4 bits to accommodate month

    // i.e, last 5 bits for day, 4 bits before that is for month, remaining bits
    // before for year
}

fn decode_date(enc_date: u32) -> Date {
    let day: u32 = enc_date % 32; // remainder of 2^5
    let month: u32 = (enc_date >> 5) % 16;
    let year: u32 = enc_date >> 9;

    Date { year, month, day }
}
