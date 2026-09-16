/*
Exercise 0014 - Multiplication table for number
---------------------------------------------------------
Task:
Your goal is to return multiplication table for number 
that is always an integer from 1 to 10.

Example, a multiplication table (string) for number == 5 
looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

Link:
https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
---------------------------------------------------------*/

export function multiTable(number:number):string {
  let result = ""
  for (let i = 1; i <= 10; i++) {
    let sum = i * number;
    result += `${i} * ${number} = ${sum}`
    if (i != 10) result += "\n"
  }
  return result
}

console.log(multiTable(1))