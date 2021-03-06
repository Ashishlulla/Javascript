// ----------------------------- Array Questions -------------

// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const is_array = input => Array.isArray(input);
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const array_Clone = array => array.slice();
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2]));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const first = (a,n)=>{
    if (a == null){
        return  0 ;
    }
    if (n == null){
        return a[0];
    }
    if (n<0){
        return [];
    }
    return a.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-4));


// 4.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

const last = (array, n)=>{
    if (array == null){
        return 0;
    }
    if (n == null){
        return array[array.length-1];
    }
    return array.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString())
console.log(myColor.join(","))
console.log(myColor.join("+"))

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor

let num = "025468"
let result = [num[0]]
for(let i = 1; i < num.length; i++){
    if(num[i-1]%2 == 0 && num[i] % 2 == 0){
        result.push("-", num[i])
    }else{
        result.push(num[i])
    }
}
console.log(result.join(""))


// 7. Write a JavaScript program to sort the items of an array. Go to the 
//editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -const ans = 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
const ans = arr1.sort((a,b)=>a-b)
console.log(ans)


// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 0;
let max = 0;
let maxKey = "";

const setArr = new Set(arr1);
const obj = {}

for(let i of setArr){
    for(let j of arr1){
        if(i == j){
            count++;
        }
    }
    obj[i] = count;
    count = 0;
}

for(let val in obj){
    if(obj[val]> max){
      max = obj[val];
      maxKey= val;
    }
  }

console.log(`${maxKey} (${max} times)`)


// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor

a = 'The Quick Brown Fox';
let new_str1 = "";
for(let i of a.split(" ")){
    for(let j of i){
        if (j == j.toLowerCase()){
            new_str1 += j.toUpperCase()
        }else{
            new_str1 +=  j.toLowerCase()
        }
    }
    new_str1 += " "
}

console.log(new_str1)

// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let row = 0;
for(let i of a){
    console.log(`row${row}`)
    for(let j of i){
        console.log(j);
    }
    row +=1;
}

// 11.Write a JavaScript program to find the sum of squares of a numeric vector.

const sum_square =arr=>{
    let sum = 0;
    for(let i of arr){
        sum += i**2;
    }
    return sum;
}
console.log(sum_square([1,2,3,4,5]))

//12. Write a JavaScript program to compute the sum and product of an array of integers.

const SumProduct = (arr)=>{
    let sum = 0;
    let prod = 1;
    for(let i of arr){
        sum +=i;
        prod *=i;
    }
    return `Sum of Array Element : ${sum}\n Product of Array Element: ${prod} `
}

const ans = SumProduct([1,2,3,4,5])
console.log(ans)
