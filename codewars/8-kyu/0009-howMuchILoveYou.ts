/*
Exercise 0009 - I love you, a little , a lot, passionately ... not at all
---------------------------------------------------------
Task:
Who remembers back to their time in the schoolyard, when girls would take a 
flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" 
for 8 petals and so on. When the last petal was torn there were cries of excitement, dreams, 
surging thoughts and emotions. Your goal in this kata is to determine which phrase the girls 
would say at the last petal for a flower of a given number of petals. The number of petals is 
always greater than 0.

Example:
(7) --> "I love you"
(3) --> "a lot"
(6) --> "not at all"

Link:
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
---------------------------------------------------------*/

// Cara 1
// export function howMuchILoveYou(petals: number): string{
//   const arrays = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
//   let result = "";
//   if (petals == 1 || petals % 6 == 1) {
//     result = arrays[0] 
//   } else if (petals == 2 || petals % 6 == 2) {
//     result = arrays[1]
//   } else if (petals == 3 || petals % 6 == 3) {
//     result = arrays[2]
//   } else if (petals == 4 || petals % 6 == 4) {
//     result = arrays[3]
//   } else if (petals == 5 || petals % 6 == 5) {
//     result = arrays[4]
//   } else {
//     result = arrays[5]
//   }

//   return result
// }

// Cara 2
// export function howMuchILoveYou(petals: number): string{
//   const arrays = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]

//   let result = petals == 1 || petals % 6 == 1? arrays[0] : petals == 2 || petals % 6 == 2 ? 
//                 arrays[1] : petals == 3 || petals % 6 == 3 ? arrays[2] : petals == 4 || petals % 6 == 4 ? 
//                 arrays[3] : petals == 5 || petals % 6 == 5 ? arrays[4] : arrays[5]

//   return result
// }

// Arrow Function
export const howMuchILoveYou = (petals: number): string => ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][petals % 6]

console.log(howMuchILoveYou(6))