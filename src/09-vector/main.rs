fn main() {
    let vec1 = vec![1, 2, 3];
    // notice the `{:?}` debug formatter
    println!("vec1 : {:?}", vec1);

    let mut vec2 = vec![5; 10]; // vector of length 10 with all 5
    println!("vec2 : {:?}", vec2);

    let mut vec3: Vec<i32> = Vec::new();
    vec3.push(5);
    vec3.push(10);
    println!("vec3 : {:?}", vec3);

    let first = &vec3[0];
    println!("The first element is {}", first);

    let second: &i32 = &vec3[1];
    println!("The second element is {}", second);

    vec3[0] = 15;
    println!("The first element is {}", &vec3[0]);

    for i in &vec1 {
        println!("{}", i);
    }

    println!("vec2 length = {}", vec2.len());

    // remove item
    vec2.remove(0);

    // remove last item
    vec2.pop();

    // remove all items
    vec2.clear();
}
