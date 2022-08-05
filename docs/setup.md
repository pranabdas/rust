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

Run:
```bash
cd my_rust_project
cargo run
```

Build:
```bash
cargo build
```

Release:
```bash
cargo release
```
