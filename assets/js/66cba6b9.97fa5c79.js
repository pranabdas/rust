"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([[784],{2406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),s=n(814);const i={title:"Arrays and tuples"},l=void 0,o={unversionedId:"basics/arrays",id:"basics/arrays",title:"Arrays and tuples",description:"In rust, the data types of all array element have to the same. We can declare an",source:"@site/docs/basics/06-arrays.mdx",sourceDirName:"basics",slug:"/basics/arrays",permalink:"/rust/basics/arrays",draft:!1,editUrl:"https://github.com/pranabdas/rust/blob/main/docs/basics/06-arrays.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Arrays and tuples"},sidebar:"docs",previous:{title:"Data type",permalink:"/rust/basics/data-type"},next:{title:"Function",permalink:"/rust/basics/function"}},u={},p=[{value:"Tuples",id:"tuples",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In rust, the data types of all array element have to the same. We can declare an\narray by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"let x = [1, 2, 3];\n")),(0,r.kt)("p",null,"We can access the elements of the array by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"first_element = x[0]\n")),(0,r.kt)("p",null,"If we want to modify the elements of the array, we need to use the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"mut"),"\nduring declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"let mut x = [1, 2, 3];\nx[0] = 4\n")),(0,r.kt)("p",null,"Some more example of array:"),(0,r.kt)(s.Z,{language:"rust",title:"src/06-arrays/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'fn main() {\n    let arr1 = [1, 2, 3];\n    println!("Second element of arr1 = {}", arr1[1]);\n    println!("First element of arr1 = {:?}", arr1.get(0));\n    // get method returns Options<T> enum (Some(T) or None), we can print using\n    // debug formatter\n\n    let mut arr2 = [2, 4, 6];\n    arr2[0] = 0;\n    println!("First element of arr2 = {}", arr2[0]);\n\n    // swap two elements of an array\n    println!("arr2 before swap: {:?}", arr2);\n    // this way you can print a whole array\n    arr2.swap(1, 2);\n    println!("arr2 after swap: {:?}", arr2);\n\n    // defining array without initialization\n    let arr3: [i32; 5]; // array of size 5 containing 32 bit integers\n    arr3 = [1; 5]; // initialize all elements with same number\n    println!("3rd element of arr3 = {}", arr3[2]);\n\n    let len_arr2 = arr2.len(); // data type of len is `usize`\n\n    for i in 0..len_arr2 {\n        println!("{}", arr2[i]);\n    }\n\n    // multi-dimensional arrays\n    let arr4 = [[1, 2, 3], [4, 5, 6]];\n    println!("arr4[1][1] = {}", arr4[1][1]);\n\n    // initialize a multi-dimensional array;\n    let arr5: [[[i32; 5]; 6]; 10];\n    // notice inner most dimension size is 5, and outer most 10\n    arr5 = [[[0; 5]; 6]; 10];\n    println!("arr5[9][4][3] = {}", arr5[9][4][3]);\n}\n'),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"Tuples elements can have different data types. Tuple elements are accessed using\n",(0,r.kt)("strong",{parentName:"p"},"dot")," notation."),(0,r.kt)(s.Z,{language:"rust",title:"src/06-tuples/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'fn main() {\n    let data = (35, 185, "Pranab"); // order of elements in a tuple matters\n    let first_item = data.0;\n\n    println!("First element of the tuple = {}", first_item);\n    println!("data = {:?}", data); // print whole tuple using debug formatter\n\n    // destructuring\n    let (age, height, name) = data;\n    println!("Name: {name}, Age = {age}, Height = {height}");\n}\n'))}d.isMDXComponent=!0}}]);