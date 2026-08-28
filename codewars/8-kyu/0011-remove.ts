/*
Exercise 0011 - Exclamation marks series #1: 
Remove an exclamation mark from the end of string
---------------------------------------------------------
Task:
Remove an exclamation mark from the end of a string. For a
beginner kata, you can assume that the input data is always
a string, no need to verify it.

Example:
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

Link:
https://www.codewars.com/kata/57fae964d80daa229d000126
---------------------------------------------------------*/

export function remove(s: string): string {
    return s[s.length-1] != "!" ? s : s.slice(0, s.length-1)
}

console.log(remove("aaa!"))