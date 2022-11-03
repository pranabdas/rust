use std::io::{self, Write}; // require for flushing tty
mod utils; // for modules from a different source file

use utils::read_number; // otherwise we have to refer as utils::read_number()

// we can bring local module path to the scope as well similar way
// use crate::hello::extended; // submodule, call `extended::hello_spanish()`
// use crate::hello::hello_bengali; // specific function, call `hello_bengali()`
// use crate::hello::extended::{hello_chinese, hello_italian};

// bring in all public members in the path with GLOB (global) operator `*`
// use crate::hello::*; // use carefully, can create name conflicts
// use crate::hello::prelude::*;

// if there are multiple submodules with the same name, we can use `as` keyword
// use std::io::Result as IO_Result;
// use std::fmt::Result as FMT_Result;


fn main() {
    print!("How old are you? ");
    io::stdout().flush().unwrap(); // flush tty

    match read_number() {
        Ok(age) => println!("You are {} years old.", age),
        Err(err) => println!("{}", err),
    }

    // use the module defined in the same source file
    println!("++++ calling bengali ++++");
    crate::hello::hello_bengali(); // absolute path

    println!("++++ calling hindi ++++");
    hello::hello_hindi(); // relative path

    // similarly call submodules
    println!("++++ calling chinese ++++");
    hello::extended::hello_chinese();
    println!("++++ calling italian ++++");
    hello::extended::hello_italian();
}

// module can be in the main file as well
// functions are private by default, a child module can access a private parent
// module, but not the other way
mod hello {
    pub fn hello_bengali() {
        println!("Bengali: Namaskar!");
    }

    pub fn hello_hindi() {
        println!("Hindi: Namaste!");
        // we can all submodule
        extended::hello_chinese(); // of course we could absolute path as well

        // we can also call private function as well under the same scope
        hello_spanish();
    }

    // private function by default, cannot be called from main
    fn hello_spanish() {
        println!("Spanish: Hola!");
    }

    // a module may contain submodules
    pub mod extended {
        // submodule can contain function names that exists in the parent module
        pub fn hello_chinese() {
            println!("Chinese: Ni hao!");
        }

        pub fn hello_italian() {
            println!("Italian: Ciao!");
            // we can call a parent module using absolute path or relative path
            // child can access private parent function
            super::hello_spanish();
        }
    }
}

// other than functions, we can also organize structs and enums in modules
// all members and methods of struct are private by default, we need to make
// them public case by case basis
// in case of enum, if we make it public, all its variants becomes public too
