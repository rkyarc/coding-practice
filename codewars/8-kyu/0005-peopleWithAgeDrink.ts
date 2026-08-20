/*
Exercise 0005 - Drink about
---------------------------------------------------------
Task:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Write a function that receives age, and returns what they drink.

Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

Example:
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

Link:
https://www.codewars.com/kata/56170e844da7c6f647000063
---------------------------------------------------------*/

// Cara 1
// export function peopleWithAgeDrink(old: number): string {
//   let result = "drink ";
//   if (old < 14) {
//     result += "toddy";
//   } else if (old < 18) {
//     result += "coke"
//   } else if (old < 21) {
//     result += "beer"
//   } else {
//     result += "whisky"
//   }

//   return result;
// }

// Cara 2
// export function peopleWithAgeDrink(old: number): string {
//   let result = "drink ";

//   return result += old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky"
// }

// Arrow Function
export const peopleWithAgeDrink = (old: number): string => "drink " + (old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky")

console.log(peopleWithAgeDrink(20));