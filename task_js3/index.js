//! task 1

// function capitalizeWords(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

// console.log(capitalizeWords("html, css, js, php, bootstrap, typescript, jquery, tailwind, angular"));

//! task 2

// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }

// console.log(containsSubstring("Mehdiyevashumen", "men")); // true
// console.log(containsSubstring("Mehdiyevashumen", "sha")); // false

//! task 3

// function reverseString(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// console.log(reverseString("hello")); // "olleh"

//! task 4

// function countVowels(str) {
//     const matches = str.match(/[aeiouAEIOU]/g);
//     return matches ? matches.length : 0;
// }

// console.log(countVowels("hello world")); // 3

//! task 5

// function isPalindrome(str) {
//     const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
//     const reversedStr = cleanedStr
//     .split('')
//     .reverse()
//     .join('');
    
//     return cleanedStr === reversedStr;
// }

// console.log(isPalindrome("qu l  lu  q")); // true
// console.log(isPalindrome("h  el lo   "));  // false

//! task 6

// function formatToDecimal(number, decimal) {
//     return number.toFixed(decimal);
// }

// console.log(formatToDecimal(5.75759, 2)); // "5.76"

//! task 7

// function randomInteger(min, max) {

//     min = Math.ceil(min);
//     max = Math.floor(max);

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomInteger(1, 10));

//! task 8

// function numberToString(num) {
//     return num.toString();
// }

// console.log(numberToString(123)); // "123"

//! task 9

// function findMaxValue(arr) {
//     return Math.max(...arr);
// }

// console.log(findMaxValue([3, 18, 56, 15])); // 56

//! task 10

// function roundNumber(num){
//     return Math.round(num);
// }

// console.log(roundNumber(4.574)); // 5