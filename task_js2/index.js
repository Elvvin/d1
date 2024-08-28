//! task 1

// var myArray = [7, 'hello', 'html', 7, 10, 3, 'css', 'css'];

// var count = {};

// myArray.forEach(function(item) {
//     if (count[item]) {
//     count[item]++;
// }   else {
//     count[item] = 1;
// }
// });

// for (var key in count) {
//     if (count.hasOwnProperty(key)) {
//     console.log(key + ': ' + count[key]);
//     }
// }

//! task 2

// function arraysAreEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     } 
//     arr1 = arr1.slice().sort();
//     arr2 = arr2.slice().sort();
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//         return false;
//         }
//     } 
//     return true;
// }

// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(arraysAreEqual([1, 2, 3], [3, 2, 1])); // true
// console.log(arraysAreEqual([1, 2], [1, 2, 2]));   // false
// console.log(arraysAreEqual(["salam", 2], ["salam", "2"])); // false
// console.log(arraysAreEqual([1, 4, "at"], ["at", 1, 4])); // true
// console.log(arraysAreEqual(["At", 1], [1, "aT"])); // false

//! task 3

// var arr1 = [-7, -71, 66, 11, 3, 8, 67];

// function secondSmallestElement(arr1) {
//     arr1.sort((a, b) => a - b);
//     return arr1[1];
// }

// console.log(secondSmallestElement(arr1)); // -7

// function secondSmallestElement(arr1) {
//     arr1.sort((a, b) => a + b);
//     return arr1[1];
// }

// console.log(secondSmallestElement(arr1)); // 66

// var arr2 = [1, 6, 0, 5, 3, 8, 16]; // 0 1 3 5 6 8 16

// function secondBiggestElement(arr2) {
//     arr2.sort((a, b) => b - a);
//     return arr2[1];
// }

// console.log(secondBiggestElement(arr2)); // 8

// console.log(Math.min(...arr2));

//! task 4

// const array = [1, 2, -5, 8, -3, 9, -7];

// Müsbət və mənfi ədədləri toplamaq üçün dəyişənlər
// let positiveSum = 0;
// let negativeSum = 0;

// array.forEach(number => {
//     if (number > 0) {
//     positiveSum += number;
//     } else if (number < 0) {
//     negativeSum += number;
//     }
// });

// console.log(`Müsbət toplam: ${positiveSum}`);
// console.log(`Mənfi toplam: ${negativeSum}`);

//! task 5

// function filterArray(array, limit) {
//     const result = array.filter(number => number > limit);
    
//     console.log(result);
// }

// const array1 = [1, 2, -5, 8, -3, 9, -7];
// const limit1 = 4;
// filterArray(array1, limit1); // [8, 9]

// const array2 = [-7, -3, 2, -8, 5, -4];
// const limit2 = -4;
// filterArray(array2, limit2); // [-3, 2, 5]

//! task 6

// function uniqueElements(array) {
//     const uniqueSet = new Set(array.map(item => String(item)));

//     const uniqueArray = Array.from(uniqueSet).map(item => {
//         if (item === 'true') return true;
//         if (item === 'false') return false;
//         if (!isNaN(item)) return Number(item);
//         return item;
//     });

//     console.log(uniqueArray.join(' '));
// }

// const arr1 = [1, "salam", 1, true, true, false, false, false, 5, "5"]; // 1 salam true false 5
// const arr2 = [2, "class", 1, true, "class", 16, 17, 18,  "17"]; // 2 class 1 true 16 17 18
// uniqueElements(arr1);
// uniqueElements(arr2);

//! task 7

// function calculate(array) {
//     let result = 1;  

//     const length = array.length;

//     for (let i = 0; i < length; i += 2) {
//         const integerValue = array[i]; // arr1[2, 3, 7, 4]

//         const booleanValue = array[i + 1]; // arr1[true, false, true, false]

//         if (booleanValue === true) {
//             result *= integerValue;
//         }
//     }

//     console.log(result);
// }

// const arr1 = [2, true, 3, false, 7, true, 4, false];
// const arr2 = [8, false, 4, false, 11, false, 2, false];
// const arr3 = [8, false, 3, true, 7, false, 1, true, 8, true];
// const arr4 = [5, false, 2, true, 7, true, 6, true, 9, false];

// calculate(arr1);  // 14
// calculate(arr2);  // 1
// calculate(arr3);  // 24
// calculate(arr4);  // 84

//! task 8

// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "sator arepo tenet opera rotas";
// let str2 = "NİSPONANOMİMATAMİMONANOPSİN";
// let str3 = "bizə tut əzib";
// let str4 = "Bu bir palindrom deyil.";

// console.log(isPalindrome(str1)); //true
// console.log(isPalindrome(str2)); //true
// console.log(isPalindrome(str3)); //true
// console.log(isPalindrome(str4)); //false