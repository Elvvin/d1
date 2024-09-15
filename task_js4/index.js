//! Task 1

// function findAllPairsWithSum(arr, target) {
//     let found = false;
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 console.log(`${arr[i]} və ${arr[j]}`);
//                 found = true;
//             }
//         }
//     }
    
//     if (!found) {
//         console.log('Tapılmadı.');
//     }
// }

// const array = [7, 9, 6, 8, 11, 5, 13];
// const targetSum = 18;
// findAllPairsWithSum(array, targetSum);

//! Task 2

// function bubbleSort(arr) {
//     let k = arr.length

//     for(let i = 0; i < k; i++){
//         for(let j = 0; j < k - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// const myArray = [12, 48, 35, 7, 23, 86, 16];
// const sortedArray = bubbleSort(myArray);
// console.log(sortedArray);

//! Task 3

// function bubbleSort(arr) {
//     let k = arr.length

//     for(let i = 0; i < k - 1; i++){
//         for(let j = 0; j < k - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// const myArray = ["banana", "apple" ,"cherry", "Date"];
// const sortedArray = bubbleSort(myArray);
// console.log(sortedArray);

//! Task 4

// function mergeArray(arrays) {
//     return arrays
//     .flat()
//     .sort((a, b) => a - b);
// }

// const arrays = [[1, 5, 9], [2, 6], [3, 4, 7, 8]];
// console.log(mergeArray(arrays))