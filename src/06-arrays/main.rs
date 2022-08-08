fn main() {
    let arr1 = [1, 2, 3];
    println!("Second element of arr1 = {}", arr1[1]);

    let mut arr2 = [2, 4, 6];
    arr2[0] = 0;
    println!("First element of arr2 = {}", arr2[0]);

    // defining array without initialization
    let arr3: [i32; 5]; // array of size 5 containing 32 bit integers
    arr3 = [1; 5]; // initialize all elements with same number
    println!("3rd element of arr3 = {}", arr3[2]);

    let len_arr2 = arr2.len(); // data type of len is `usize`
    for i in 0..len_arr2 {
        println!("{}", arr2[i]);
    }

    // multi-dimensional arrays
    let arr4 = [[1, 2, 3], [4, 5, 6]];
    println!("arr4[1][1] = {}", arr4[1][1]);

    // initialize a multi-dimensional array;
    let arr5: [[[i32; 5]; 6]; 10];
    // notice inner most dimension size is 5, and outer most 10
    arr5 = [[[0; 5]; 6]; 10];
    println!("arr5[9][4][3] = {}", arr5[9][4][3]);
}
