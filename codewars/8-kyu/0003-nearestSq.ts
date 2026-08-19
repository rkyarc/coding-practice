/*
Exercise 0003 - Find Nearest square number
---------------------------------------------------------
Task:
Your task is to find the nearest square number of a positive 
integer n. In mathematics, a square number or perfect square 
is an integer that is the square of an integer; in other 
words, it is the product of some integer with itself.

Example:
if n = 111, then the nearest square number equals 121, 
since 111 is closer to 121, the square of 11, than 100, 
the square of 10

Link:
https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
---------------------------------------------------------*/

// Cara 1
// export function nearestSq(n: number): number {
//   let nums = Math.sqrt(n);
//   nums = Math.round(nums);
//   return nums ** 2;
// }

// Cara 2
// export function nearestSq(n: number): number {
//   return Math.round(Math.sqrt(n))**2;
// }

// Arrow Function
export const nearestSq = (n: number): number => Math.round(Math.sqrt(n))**2;

console.log(nearestSq(111));