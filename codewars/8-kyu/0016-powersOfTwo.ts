/*
Exercise 0016 - Powers of 2
---------------------------------------------------------
Task:
Complete the function that takes a non-negative integer n as 
input, and returns a list of all the powers of 2 with the 
exponent ranging from 0 to n ( inclusive ).

Example:
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Link:
https://www.codewars.com/kata/57a083a57cb1f31db7000028
---------------------------------------------------------*/

// Cara 1
// export function powersOfTwo(n:number):number[]{
//   let arrays = []
//   for (let i = 0; i <= n; i++) {
//     arrays[i] = 2**i
//   }

//   return arrays;
// }

// Arrow Function
export const powersOfTwo = (n:number):number[] => Array.from({length: n + 1}, (_, i) => 2**i)

console.log(powersOfTwo(4))