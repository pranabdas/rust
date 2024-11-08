"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([[737],{9661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"basics/variables","title":"Variable assignment","description":"In this we will assign variable.","source":"@site/docs/basics/02-variables.mdx","sourceDirName":"basics","slug":"/basics/variables","permalink":"/rust/basics/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/rust/blob/main/docs/basics/02-variables.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Variable assignment","sidebar_label":"Variables"},"sidebar":"docs","previous":{"title":"Hello world","permalink":"/rust/basics/hello-world"},"next":{"title":"Data type","permalink":"/rust/basics/data-type"}}');var s=t(4848),i=t(8453),r=t(1432);const l='fn main() {\n    let age = 34; // by default variables are immutable\n    println!("I\'m {} years old.", age);\n\n    // need to explicitly declare mutable variables with keyword mut\n    let mut x = 10;\n    println!("My variable = {}", x);\n\n    x = 10 + 5; // rust will automatically try to infer the type from assignment\n                // explicit type declaration:\n                // let x: i32 = 5;\n                // let y = 32_u8;\n    println!("My variable = {}", x);\n    type_of(&x); // this is i32\n\n    let a = 5;\n    let b = 6;\n    type_of(&a); // type of `a` and `b` will be set as u8 because of the\n                 // following statement\n    let c: u8 = a + b; // rust compiler is smart enough to convert previous\n                       // assignments data types\n    type_of(&c);\n\n    const PI: f64 = 3.14159; // mut keyword is not allowed with const\n                             // cannot be shadowed\n    println!("Pi * 2 = {}", PI * 2.0); // int cannot be multiplied by float\n\n    // variable shadowing\n    let spaces = "   ";\n\n    // it is allowed to declare variables with same name shadowing the previous\n    // variable with the same name\n    let spaces = spaces.len(); // notice data type has changed too\n\n    {\n        let spaces = spaces * 2;\n        println!("double spaces length (inner scope) = {spaces}");\n    }\n\n    println!("spaces length (outer scope) = {spaces}");\n\n    // if a variable is declared but never used, use `_` prefix to hide warnings\n    // we can just use `_` naming for throwaway variable (note that isolated `_`\n    // cannot be used in any expression while `_name` can be)\n\n    // underscores in numeric literals for better readability\n    // can be used for int, float, hexadecimal, and other formats\n    // let binary = 0b_0110_1001_1111_0001;\n    println!("2 million: {}", 2_000_000);\n\n    // static declaration (not used extensively)\n    // type declaration is must for static\n    // static values are always immutable\n    // uses static allocation (in contrast to stack allocation)\n    // style guide: use capital letters for static variables (separated with\n    // underscores)\n    static NO_WEEK_DAYS: u8 = 7;\n    println!("No of days in a week = {}", NO_WEEK_DAYS);\n}\n\n// helper function to print type of a variable\nfn type_of<T>(_: &T) {\n    println!("Type: {}", std::any::type_name::<T>())\n}\n',o='fn main() {\n    // string literal: they are hard coded into the compiled binary, must be\n    // known compile time.\n    let mut message = "Hello";\n    println!("message: {}", message);\n\n    message = "Hello rust";\n    println!("message: {}", message);\n\n    let mut planet = String::from("Earth");\n    // this assignment is different from string literal\n    // String type stored in the heap and its size can be dynamically changed\n    // a corresponding pointer, length, and capacity is stored in the stack\n    // heap memory is requested to the memory allocator during runtime\n\n    planet.push_str(" has one moon.");\n    // if the heap needs to move the message to a new location in order to\n    // accommodate the new size, it will also update the pointer address\n\n    println!("{planet}");\n    // once the variable that owns the heap memory goes out of scope, the\n    // allocated memory is freed and return to the operating system/ allocator.\n    // this is different from C and C++ where the developer has to explicitly\n    // free/ delete the allocated memory, or Java where garbage collector looks\n    // for unused memory and frees it periodically\n\n    // in newer C++ standard, similar pattern (Resource Acquisition Is\n    // Initialization) is implemented (see, unique_pointer)\n\n    let x: i32 = 5;\n    let mut y: i32 = x; // value of x copied to y\n    println!("x = {}, y = {}", x, y);\n\n    y = 10;\n    println!("x = {}, y = {}", x, y);\n\n    // now look at what happens for a data that is stored in the heap\n    let message = String::from("hello");\n    let mut alt_message = message; // value of message is not copied here\n                                   // the variable points to the same heap\n                                   // location, we copy the information stored\n                                   // in the stack i.e., pointer, length and\n                                   // capacity to the new variable\n\n    // after this statement the message variable goes out of scope, it is to\n    // guarantee memory safety, otherwise there could be double drop\n    // (deallocation) calls\n\n    // this is therefore move, not even a shallow copy, the previous variable\n    // is invalid hereafter\n\n    // Important: passing arguments to a function works the same way as\n    // assigning variable\n    alt_message.push_str(" world.");\n\n    // println!("message: {}", message); // this will cause compile error\n    println!("alt message: {}", alt_message);\n\n    // in case we do want to make deep copy we can use clone method\n    let mut alt_message2 = alt_message.clone();\n    alt_message2.push_str(" Have a great day.");\n\n    println!("alt message again: {}", alt_message);\n    println!("alt message 2: {}", alt_message2);\n}\n',c={title:"Variable assignment",sidebar_label:"Variables"},m=void 0,d={},p=[{value:"String",id:"string",level:3}];function h(e){const n={h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this we will assign variable."}),"\n","\n",(0,s.jsx)(r.A,{language:"rust",title:"src/02-variables/main.rs",showLineNumbers:!0,children:l}),"\n",(0,s.jsx)(n.h3,{id:"string",children:"String"}),"\n","\n",(0,s.jsx)(r.A,{language:"rust",title:"src/02-string/main.rs",showLineNumbers:!0,children:o})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);