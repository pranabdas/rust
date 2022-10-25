"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([[581],{1959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Installing Rust in your computer",sidebar_label:"Setup",slug:"/"},s=void 0,p={unversionedId:"setup",id:"setup",title:"Installing Rust in your computer",description:"Go to the website  and follow the instruction for your OS. On",source:"@site/docs/setup.md",sourceDirName:".",slug:"/",permalink:"/rust/",draft:!1,editUrl:"https://github.com/pranabdas/rust/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Installing Rust in your computer",sidebar_label:"Setup",slug:"/"},sidebar:"docs",next:{title:"Basics",permalink:"/rust/category/basics"}},u={},o=[{value:"cargo",id:"cargo",level:2},{value:"Additional tools",id:"additional-tools",level:2}],i={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Go to the website ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs"},"https://rustup.rs")," and follow the instruction for your OS. On\nUNIX/Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,r.kt)("p",null,"Non interactive install in Ubuntu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt install -y curl && \\\ncurl https://sh.rustup.rs -sSf | sh -s -- -y\n# source $HOME/.cargo/env\n")),(0,r.kt)("p",null,"Once the program is installed, we can check by printing its version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustc --version\n")),(0,r.kt)("p",null,"For updating:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,r.kt)("p",null,"Compiling a simple program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustc main.rs\n\n# if you would like to change the name of the output\nrustc main.rs -o my_program\n")),(0,r.kt)("p",null,"Executing the binary after compilation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./main\n")),(0,r.kt)("h2",{id:"cargo"},"cargo"),(0,r.kt)("p",null,"For larger rust projects (with other package dependencies and with large number\nof source files), rust package manager ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," can be used. Create a new\nproject:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new my_rust_project\n")),(0,r.kt)("p",null,"There are two types of crates/ packages: library and binary. By default, cargo\nwill create binary packages, which contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," program. We can create\nspecific type of package by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new my_rust_project --bin\ncargo new my_rust_project --lib\n")),(0,r.kt)("p",null,"Alternatively, we can create our project folder manually, and initialize cargo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir new_rust_project\ncd new_rust_project\ncargo init\n# or\ncargo init --lib\n")),(0,r.kt)("p",null,"Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my_rust_project\ncargo run\n")),(0,r.kt)("p",null,"Build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\n")),(0,r.kt)("p",null,"Executable will be placed under: ",(0,r.kt)("inlineCode",{parentName:"p"},"target/debug/"),"."),(0,r.kt)("p",null,"Release:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,r.kt)("p",null,"You can find optimized binary under: ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release/"),"."),(0,r.kt)("h2",{id:"additional-tools"},"Additional tools"),(0,r.kt)("p",null,"Clippy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup component add clippy-preview\n")),(0,r.kt)("p",null,"Use clippy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo clippy\n")),(0,r.kt)("p",null,"It is probably faster than compile and run the code."))}c.isMDXComponent=!0}}]);