#!/bin/bash
# this script initializes basic rust project with `main.rs` without cargo
# usage: bash template.sh <project-name>

if [ $# -ne 1 ]; then
    echo "Error: Invalid number of arguments"
    echo "Usage: bash template.sh <project-name>"
    exit 1
# check argument is not empty, e.g., `""` or `" "`
elif [ -z `echo "$1" | xargs` ]; then
    echo "Error: Project name cannot be empty."
    echo "Usage: bash template.sh <project-name>"
    exit 1
elif [ -d "$1" ]; then
    echo "Error: \"$1\" directory already exists under ${PWD}"
    exit 1
fi

mkdir "$1"
cat > "$1/main.rs" << EOF
fn main() {

}
EOF
