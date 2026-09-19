/*
Exercise 0017 - Well of Ideas - Easy Version
---------------------------------------------------------
Task:
For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array for good ideas 
'good' and bad ideas 'bad'. If there are one or two good ideas, 
return 'Publish!', if there are more than 2 return 'I smell a 
series!'. If there are no good ideas, as is often the case, return 'Fail!'.

Example:
['bad', 'bad', 'bad'] --> 'Fail!'
['good', 'bad', 'bad', 'bad', 'bad'] --> 'Publish!'
['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] --> 'I smell a series!'

Link:
https://www.codewars.com/kata/57f222ce69e09c3630000212
---------------------------------------------------------*/

// Cara 1
export function well(x: string[]): string{
  let result = 0
  for (let i = 0; i < x.length; i++) if (x[i] === "good") result++

  return result > 2 ? "I smell a series!" : result > 0 ? "Publish!" : "Fail!"
}

console.log(well(["bad", "good", "bad", "good", "bad", "good"]))