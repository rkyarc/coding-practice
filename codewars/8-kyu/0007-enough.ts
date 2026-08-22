/*
Exercise 0007 - Will there be enough space?
---------------------------------------------------------
Task:
You have to write a function that accepts three parameters:
cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the 
number of passengers he can't take.

Example:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

Link:
https://www.codewars.com/kata/5875b200d520904a04000003
---------------------------------------------------------*/

// Cara 1
// export function enough(cap: number, on: number, wait: number): number {
//     return cap-on-wait >= 0 ? 0 : on+wait-cap;
// }

// Arrow Function
export const enough = (a: number, b: number, c: number): number => b+c >a ? b+c-a : 0;

console.log(enough(100, 10, 30))