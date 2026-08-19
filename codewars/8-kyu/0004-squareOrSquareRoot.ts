/*
Exercise 0004 - To square(root) or not to square(root)
---------------------------------------------------------
Task:
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.

Example:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Link:
https://www.codewars.com/kata/57f6ad55cca6e045d2000627
---------------------------------------------------------*/

// Cara 1
// export function squareOrSquareRoot(array:number[]) : number[] {
//   for (let i = 0; i < array.length; i++) {
//     if (Math.sqrt(array[i]) == Math.round(Math.sqrt(array[i]))) {
//       array[i] = Math.sqrt(array[i])
//     } else {
//       array[i] = array[i]**2
//     }
//   }
//   return array;
// }

// Cara 2
// export function squareOrSquareRoot(array: number[]): number[] {
//   return array.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x ** 2);
// }

// Arrow Function
export const squareOrSquareRoot = (array: number[]): number[] => array.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x ** 2);

console.log(squareOrSquareRoot([3, 5, 9]));