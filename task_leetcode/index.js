//! task 1

// function twoSum(input, target){
//     for (i = 0; i < input.length; i++){
//         for (j = i + 1; j < input.length; j++) {
//             if(input[i] + input[j] === target){
//                 console.log(input[i], input[j])
//             }
            
//         }
//     }
// }

// let arr1 = [2, 7, 8, 16, 5, 4, 1];
// let sum = 9;

// twoSum(arr1, sum) // 2,7 ; 8,1 ; 5,4

//! task 2

// function romanNumeralToInteger(s){
//     const romanNumerals = {
//         'I' : 1, 
//         'V' : 5, 
//         'X' : 10, 
//         'L' : 50, 
//         'C' : 100, 
//         'D' : 500, 
//         'M' : 1000
//     }
//     return s.split('').reduceRight((acc, curr, index) => {
//         const value = romanNumerals[curr];
//         return acc + (value < romanNumerals[s[index + 1]] ? -value : value);
//     }, 0);
// }

// console.log(romanNumeralToInteger("DMCVL")) // 645

//! task 3

// let strings = ["flower", "flow", "flight"]

// function getPrefix(arr) {
//     let prefix = ""

//     for(j = 0; j < arr[0].length; j++){
//         for(i = 0; i < arr.length; i++){
//             if (arr[i][j] !== arr[0][j]) {
//                 return prefix
//             }
//         }
//         prefix += arr[0][j]
//     }
//     return prefix
// }

// console.log(getPrefix(strings)) // fl