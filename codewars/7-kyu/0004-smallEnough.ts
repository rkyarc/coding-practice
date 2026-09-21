/*
Exercise 0004 - Tmall enough? - Beginner
---------------------------------------------------------
Task:
You will be given an array and a limit value. You must check 
that all values in the array are below or equal to the limit 
value. If they are, return true. Else, return false. You can 
assume all values in the array are numbers.

Example:
([66, 101], 200) --> true
([78, 117, 110, 99, 104, 117, 107, 115], 100) --> false

Link:
https://www.codewars.com/kata/57cc981a58da9e302a000214
---------------------------------------------------------*/

// Cara 1
// export function smallEnough(a: number[], limit: number): boolean{
//   for (let i = 0; i < a.length; i++) if (a[i] > limit) return false
//   return true
// }

// Arraw Function
export const smallEnough = (a: number[], limit: number): boolean => Math.max(...a) <= limit

console.log(smallEnough([1, 5], 6))