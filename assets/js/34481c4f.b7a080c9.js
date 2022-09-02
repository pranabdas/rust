"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([[57],{8605:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var o=t(7462),i=(t(7294),t(3905)),s=t(814);const l={title:"Loop"},r=void 0,a={unversionedId:"basics/loop",id:"basics/loop",title:"Loop",description:"Iteration using loop:",source:"@site/docs/basics/05-loop.mdx",sourceDirName:"basics",slug:"/basics/loop",permalink:"/rust/basics/loop",draft:!1,editUrl:"https://github.com/pranabdas/rust/blob/main/docs/basics/05-loop.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Loop"},sidebar:"docs",previous:{title:"if else",permalink:"/rust/basics/if-else"},next:{title:"Resources",permalink:"/rust/resources"}},u={},p=[{value:"While loop",id:"while-loop",level:3},{value:"For loop",id:"for-loop",level:3},{value:"List enumeration",id:"list-enumeration",level:3}],c={toc:p};function m(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Iteration using loop:"),(0,i.kt)(s.Z,{language:"rust",title:"src/05-loop/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'fn main() {\n    // loop and break\n    let mut count = 5;\n    loop {\n        println!("{count}");\n        count -= 1;\n\n        if count < 0 {\n            println!("Blast off.");\n            break;\n        }\n    }\n}\n'),(0,i.kt)("h3",{id:"while-loop"},"While loop"),(0,i.kt)(s.Z,{language:"rust",title:"src/05-while-loop/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'use std::thread::sleep;\nuse std::time::Duration;\n\nfn main() {\n    let mut count = 5;\n    let time = Duration::from_secs(1);\n\n    while count > 0 {\n        println!("{count}");\n        sleep(time);\n        count -= 1;\n    }\n\n    println!("LIFTOFF!!!");\n}\n'),(0,i.kt)("h3",{id:"for-loop"},"For loop"),(0,i.kt)(s.Z,{language:"rust",title:"src/05-for-loop/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'fn main() {\n    for number in (0..6).rev() {  \n        // (0..6) is same as (0..=5)\n        // increment by step (2..=10).step_by(2)\n        println!("{number}");\n    }\n    println!("LIFTOFF!!!");\n}\n'),(0,i.kt)("h3",{id:"list-enumeration"},"List enumeration"),(0,i.kt)(s.Z,{language:"rust",title:"src/05-list-enum/main.rs",showLineNumbers:!0,mdxType:"CodeBlock"},'fn main() {\n    let list = ["apple", "banana", "orange"];\n\n    for item in list {\n        println!("{item}");\n    }\n}\n'))}m.isMDXComponent=!0}}]);