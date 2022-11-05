use std::time::Instant;

fn main() {
    let t0 = Instant::now();
    let mut v = Vec::<i32>::new();

    for i in 0..100_000 {
        v.push(i);
    }

    let t = Instant::now();

    println!("Elapsed time = {} ms.", elapsed_ms(t0, t));
}

fn elapsed_ms(t0: Instant, t: Instant) -> f64 {
    let e = t - t0;
    e.as_secs() as f64 * 1000.0 + e.subsec_nanos() as f64 / 1e6
}
