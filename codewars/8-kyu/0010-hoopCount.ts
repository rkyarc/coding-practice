/*
Exercise 0010 - Keep up the hoop
---------------------------------------------------------
Task:
Alex just got a new hula hoop, he loves it but feels discouraged 
because his little brother is better than him. Write a program where 
Alex can input (n) how many times the hoop goes round and it will 
return him an encouraging message:
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

Example:
(6)  --> "Keep at it until you get it"
(10) --> "Great, now move on to tricks"

Link:
https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
---------------------------------------------------------*/

export const hoopCount = (n: number): string => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"

console.log(hoopCount(10))