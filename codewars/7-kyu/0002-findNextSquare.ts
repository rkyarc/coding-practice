/*
Exercise 0002 - Find the next perfect square!
---------------------------------------------------------
Task:
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. Recall that an integral perfect square is 
an integer n such that sqrt(n) is also an integer. If the argument is itself not 
a perfect square then return either -1 or an empty value like None or null, 
depending on your language. You may assume the argument is non-negative.

Example:
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square

Link:
https://www.codewars.com/kata/56269eb78ad2e4ced1000013
---------------------------------------------------------*/

// Cara 1
// export function findNextSquare(sq:number):number {
//   let result = Math.sqrt(sq) + 1
//   if (Math.sqrt(sq) % 1 != 0) return -1
//   result **= 2
//   return result;
// }

// Cara 2
// export function findNextSquare(sq:number):number {
//   let result = Math.sqrt(sq)

//   if (result % 1 != 0) return -1
//   return result = (result + 1)**2
// }

// Cara 2
export const findNextSquare = (sq:number):number => Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;

console.log(findNextSquare(25))