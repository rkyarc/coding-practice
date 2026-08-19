/*
Exercise 0002 - Expressions Matter
---------------------------------------------------------
Task:
Given three integers a, b, and c, return the largest number
obtained after inserting the operators +, *, and 
parentheses (). In other words, try every combination of a, 
b, and c with the operators, without reordering the operands, 
and return the maximum value.

Example:
With the numbers 1, 2, and 3, here are some possible expressions:
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
The maximum value that can be obtained is 9.

Link:
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
---------------------------------------------------------*/
// Cara 1
// export function expressionsMatter(a: number, b: number, c: number): number {
//     const hasil1 = a + b + c;
//     const hasil2 = a + b * c;
//     const hasil3 = a * b + c;
//     const hasil4 = a * b * c;
//     const hasil5 = a * (b + c);
//     const hasil6 = (a + b) * c;

//     return Math.max(hasil1, hasil2, hasil3, hasil4, hasil5, hasil6)
// }

// Cara 2
// export function expressionsMatter(a: number, b: number, c: number): number {
//     return Math.max(
//         a + b + c, 
//         a * b * c, 
//         a * (b + c), 
//         (a + b) * c)
// }

// Arrow Function
export const expressionsMatter = (a: number, b: number, c: number): number => Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c);

console.log(expressionsMatter(1, 2, 3))