"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([[406],{5763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=t(5893),r=t(1151),a=t(9286);const s='fn main() {\n    let x = 3;\n    let y = 4;\n    let result = add(x, y);\n    println!("{x} + {y} = {result}");\n}\n\nfn add(input1: i32, input2: i32) -> i32 {\n    input1 + input2 // notice the omission of `;` at the end.\n                    // last statement implicitly returns, and equivalent to\n                    // return input1 + input2;\n}\n',c='use std::io;\n\nfn main() {\n    println!("Enter radius: ");\n    let mut radius = String::new();\n\n    io::stdin()\n        .read_line(&mut radius)\n        .expect("Failed to read input!");\n\n    let radius: f64 = radius.trim().parse().expect("Please type a number!");\n    const PI: f64 = 3.14159;\n    let area = PI * radius * radius;\n\n    println!("Area = {area}");\n}\n',l={title:"Function"},d=void 0,o={id:"basics/function",title:"Function",description:"Example of function.",source:"@site/docs/basics/03-function.mdx",sourceDirName:"basics",slug:"/basics/function",permalink:"/rust/basics/function",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/rust/blob/main/docs/basics/03-function.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Function"},sidebar:"docs",previous:{title:"Arrays and tuples",permalink:"/rust/basics/arrays"},next:{title:"if else",permalink:"/rust/basics/if-else"}},u={},h=[{value:"Calculate area of a circle",id:"calculate-area-of-a-circle",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Example of function."}),"\n","\n",(0,i.jsx)(a.Z,{language:"rust",title:"src/03-function/main.rs",showLineNumbers:!0,children:s}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["In the above example, ff we assign ",(0,i.jsx)(n.code,{children:"x"}),", and ",(0,i.jsx)(n.code,{children:"y"})," both to be ",(0,i.jsx)(n.code,{children:"2147483647"})," (max\n",(0,i.jsx)(n.code,{children:"i32"}),"), the result will overflow ",(0,i.jsx)(n.code,{children:"i32"})," range. Unfortunately, such errors are not\ncaught compile time."]}),(0,i.jsxs)(n.p,{children:["Check out helper methods: ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.i32.html#method.wrapping_add",children:"wrapping_add"}),", ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.i32.html#method.saturating_add",children:"saturating_add"}),", ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.i32.html#method.overflowing_add",children:"overflowing_add"}),", ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.i32.html#method.checked_add",children:"checked_add"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"calculate-area-of-a-circle",children:"Calculate area of a circle"}),"\n",(0,i.jsx)(n.p,{children:"Another example where we calculate area of a circle with the input radius given\nby the user."}),"\n","\n","\n",(0,i.jsx)(a.Z,{language:"rust",title:"src/03-circle-area/main.rs",showLineNumbers:!0,children:c})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);