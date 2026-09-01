/*
Exercise 0013 - get character from ASCII Value
---------------------------------------------------------
Task:
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:
65 --> 'A'
97 --> 'a'
48 --> '0

Link:
https://www.codewars.com/kata/55ad04714f0b468e8200001c
---------------------------------------------------------*/

// Cara 1
// export function getChar(c: number): string {
//   return String.fromCharCode(c)
// }

// Arrow Function
export const getChar = (c: number): string => String.fromCharCode(c)

console.log(getChar(55))