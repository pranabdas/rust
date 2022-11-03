---
title: Installing Rust in your computer
sidebar_label: Setup
slug: /
---
Go to the website <https://rustup.rs> and follow the instruction for your OS. On
UNIX/Linux:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Non interactive install in Ubuntu:
```bash
apt update && apt install -y curl && \
curl https://sh.rustup.rs -sSf | sh -s -- -y
# source $HOME/.cargo/env
```

Once the program is installed, we can check by printing its version:
```bash
rustc --version
```

For updating:
```bash
rustup update
```

Compiling a simple program:
```bash
rustc main.rs

# if you would like to change the name of the output
rustc main.rs -o my_program
```

Executing the binary after compilation:
```bash
./main
```

## cargo
For larger rust projects (with other package dependencies and with large number
of source files), rust package manager `cargo` can be used. Create a new
project:
```bash
cargo new my_rust_project
```

There are two types of crates/ packages: library and binary. By default, cargo
will create binary packages, which contains a `main` program. We can create
specific type of package by:
```bash
cargo new my_rust_project --bin
cargo new my_rust_project --lib
```

Alternatively, we can create our project folder manually, and initialize cargo:
```bash
mkdir new_rust_project
cd new_rust_project
cargo init
# or
cargo init --lib
```

Run:
```bash
cd my_rust_project
cargo run
```

Build:
```bash
cargo build
```

Executable will be placed under: `target/debug/`.

Release:
```bash
cargo build --release
```

You can find optimized binary under: `target/release/`.

Update cargo dependencies:
```bash
cargo update --dry-run
cargo update

# update specific package(s)
cargo update -p rand -p color

cargo update -p rand --precise 0.8.0
```

## Additional tools
Clippy:
```bash
rustup component add clippy
```

Use clippy:
```bash
cargo clippy
```

It is probably faster than compile and run the code.

Rust analyzer:
```bash
rustup component add rust-analyzer
```
