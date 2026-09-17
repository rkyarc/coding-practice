/*
Exercise 0015 - Jenny's secret message
---------------------------------------------------------
Task:
Jenny has written a function that returns a greeting for a 
user. However, she's in love with Johnny, and would like to 
greet him slightly different. She added a special case to her 
function, but she made a mistake. Can you help her?

Example:
'Jim' --> 'Hello, Jim!'
'Jane' --> 'Hello, Jane!'
'Johnny' --> 'Hello, my love!'

Link:
https://www.codewars.com/kata/55225023e1be1ec8bc000390
---------------------------------------------------------*/

// Cara 1
// export function greet(name:string): string {
//   return name === "Johnny" ? "Hello, my love!" : ("Hello, " + name + "!");
// }

// Arrow Function
export const greet = (name:string): string => name === "Johnny" ? "Hello, my love!" : ("Hello, " + name + "!");

console.log(greet("Johnny"))