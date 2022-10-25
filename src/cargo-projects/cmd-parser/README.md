# cmd-parser
Initialize the project:
```
cargo new --bin cmd-parser
```
The `--bin` flag explicitly declares a binary package (which is cargo default).

## run
```bash
cargo run -- --help
cargo run -- Pranab --veg --age 35
```
Isolated `--` indicates end of cargo flags, and following options will be passed
to main.

## Optimize binary
```bash
cargo build --release
```

## dependencies
- [structopt](https://crates.io/crates/structopt), see also [clap](
https://crates.io/crates/clap)

```rust
[dependencies]
structopt = "0.3"
```
