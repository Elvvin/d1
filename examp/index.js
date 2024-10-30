// const array1 = [1, 2, 3, 4];
// const value = 0;
// const sumValue = array1.reduce(
//     (first, second) => first + second,
//     value,
// );

// console.log(sumValue);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddArr = arr.filter(element => element%2 == 0);
// console.log(oddArr);

// number array
// const numberArr = [23, 122, 1, 23, 4, 56];

// const highest = Math.max(...numberArr);
// const lowest = Math.min(...numberArr);

// console.log(highest);
// console.log(lowest);

// console.log(Math.min(...numberArr));
// console.log(Math.max(...numberArr));

// const arr1 = ["one", "two", "three"];
// const arr2 = ["four", "five", "six"];

// const arr3 = arr1 + "," + arr2;
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const duplicateValue = (input_array) => {
//     const duplicates =
//     input_array.filter((item, index) =>
//     input_array.indexOf(item) !== index);
//     return Array.from(new Set(duplicates));
// }
// const arr=[1,1,2,2,3,3,4,5,6,1];
// console.log(duplicateValue(arr));

// const numbers = [1, 3, 5, 2, 4];
// const getMiddleValue = arr => arr[Math.floor(arr.length / 2)];

// console.log(getMiddleValue(numbers));


// (function checkValue() {
//     let x = 6;
//     const myPromise = new Promise(function(resolve, reject) {
//         if (x == 5) {
//             resolve("Value is true");
//         } else {
//             reject("Value is wrong");
//         }
//     });

//     myPromise
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => {
//             console.error(error);
//         })
//         .finally(() => {
//             console.warn("Promise succesfully ended.")
//         })
// })();

// function getAllPosts(callback){
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(res => res.json())
//     .then(data => callback(data?.[0]?.id))
// }

// function getPostById(id, callback){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res => res.json())
//     .then(data => callback(data?.id, 'comments'))
// }

// function getPostCommentsById(id, url){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}/${url}`)
//     .then(res => res.json())
//     .then(data => console.log(data, 'comments'))
// }

// getAllPosts((id) => {
//     getPostById(id, (postId, url) => {
//         getPostCommentsById(postId, url)
//     })
// })

// let inputStr = "Hello World!";
// let resultStr = "";

// for (let i = inputStr.length - 1; i >= 0; i--) {
//     let char = inputStr[i];
//     if (char === 'H' || char === 'W') {
//         resultStr += char.toLowerCase();
//     } else {
//         resultStr += char.toUpperCase();
//     }
// }

// console.log(resultStr);

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }

// function syncFunction() {
//     fetchData('https://jsonplaceholder.typicode.com/todos/1')
//         .then(data => {
//             console.log(data); // Asinxron data burada da işlənir
//         });
// }

// syncFunction()

// class crytpo {
//     constructor(_name, _price){
//         this.name = _name,
//         this.price = _price
//     }
// }

// const bitcoin = new crytpo("bitcoin", "61000");

// console.log(bitcoin)

// let input = "(()())(())"
// let newInput = ""

// for (let i = 0; i < input.length; i++) {

//     let x = input[i];
//     let y = input[i + 1]
//     if (x === "(" && y === "(") {
//         continue;
//     }
//     else if(x === ")" && y === ")"){
//         continue;
//     }

//     newInput += x;
// }

// console.log(newInput)

// function checkAnagram(str1, str2) {
//     let fix = (str) => str
//     .toLowerCase()
//     .replace(/\s+/g, '')
//     .split('')
//     .sort()
//     .join('');
    
//     return fix(str1) === fix(str2);
// }

// console.log(checkAnagram("salam  ", "malas"))

// let str = "Hello World";

// function LengthOfLastWord(word) {
//     let words = word.split(" ");
//     return words[words.length - 1].length
// }

// console.log(LengthOfLastWord(str))


// function searchInsert(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         } else if (nums[i] > target) {
//             return i;
//         }
//     }
//     return nums.length;
// }

// let nums = [1, 3, 5, 7];
// console.log(searchInsert(nums, 6));

function isPowerOfTwo(n){
    
}