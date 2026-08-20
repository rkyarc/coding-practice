/*
Exercise 0006 - How old will I be in 2099?
---------------------------------------------------------
Task:
Philip's just turned four and he wants to know how old he will be 
in various years in the future such as 2090 or 3044. His parents 
can't keep up calculating this so they've begged you to help them out 
by writing a programme that can answer Philip's endless questions.
Your task is to write a function that takes two parameters: the year of 
birth and the year to count years in relation to. As Philip is getting 
more curious every day he may soon want to know how many years it was 
until he would be born, so your function needs to work with both dates 
in the future and in the past. Provide output in this format: For dates 
in the future: "You are ... year(s) old." For dates in the past: "You will 
be born in ... year(s)." If the year of birth equals the year requested 
return: "You were born this very year!" "..." are to be replaced by the 
number, followed and proceeded by a single space. Mind that you need to 
account for both "year" and "years", depending on the result.

Example:
(2012, 2016) --> "You are 4 years old."
(2000, 1990) --> "You will be born in 10 years."
(3400, 3400) --> "You were born this very year!"

Link:
https://www.codewars.com/kata/5761a717780f8950ce001473
---------------------------------------------------------*/

// Cara 1
// export function calculateAge(yearOfBirth: number, currentYear: number): string {
//   let result = "";
//   if (yearOfBirth < currentYear) {
//     if (currentYear - yearOfBirth == 1) {
//       result = "You are " + (currentYear - yearOfBirth)  + " year old."
//     } else {
//       result = "You are " + (currentYear - yearOfBirth)  + " years old."
//     }
//   } else if (yearOfBirth > currentYear){
//     if (yearOfBirth - currentYear == 1) {
//       result = "You will be born in " + (yearOfBirth - currentYear) + " year."
//     } else {
//       result = "You will be born in " + (yearOfBirth - currentYear) + " years."
//     }
//   } else {
//     result = "You were born this very year!"
//   }

//   return result;
// }

// Cara 2
// export function calculateAge(yearOfBirth: number, currentYear: number): string {
//   return yearOfBirth < currentYear ? (
//     currentYear - yearOfBirth == 1 ? "You are " + (currentYear - yearOfBirth)  + " year old." 
//     : "You are " + (currentYear - yearOfBirth)  +" years old.") : yearOfBirth > currentYear ? (
//       yearOfBirth - currentYear == 1 ? "You will be born in " + (yearOfBirth - currentYear) + " year."
//       : "You will be born in " + (yearOfBirth - currentYear) + " years."
//     ) : "You were born this very year!"
// }

// Arrow Function
export const calculateAge=(a:number,b:number):string=>a<b?(b-a==1?"You are "+(b-a)+" year old.":"You are "+(b-a)+" years old."):a>b?(a-b==1?"You will be born in "+(a-b)+" year.":"You will be born in "+(a-b)+" years."):"You were born this very year!"

console.log(calculateAge(2005, 2000));