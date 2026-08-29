/*
Exercise 0012 - Grasshopper - Check for factor
---------------------------------------------------------
Task:
This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.

Example:
(10, 2) --> true
(9, 2)  --> false

Link:
https://www.codewars.com/kata/55cbc3586671f6aa070000fb
---------------------------------------------------------*/


// export function checkForFactor(base: number, factor: number) {
//   return base % factor == 0 ? true : false
// }

// Arrow Function
export const checkForFactor = (base: number, factor: number) => base % factor == 0;

console.log(checkForFactor(7, 1))