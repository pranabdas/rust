# Rust notes

## Installation
```console
apt update && apt install -y curl && \
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env
```

## Compile
```console
rustc main.rs
```

## cargo
```console
cargo new projectX
cargo build

# build and run
cargo run
```

## Misc
Clean up all the main files in the project:

⚠️ Warning: first run the command without `-delete` flag. `.git` directory might
contain important files with name `main` as well. Make sure you do not run this
command with `-delete` in the root of project directory.

```console
# go to src directory
find . -type f -name main -delete
# github codespace
find /workspaces/rust/src -type f -name main -delete
```

## Resources
- <https://doc.rust-lang.org/book/title-page.html>
