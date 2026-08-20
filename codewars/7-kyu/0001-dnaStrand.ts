/*
Exercise 0001 - Complementary DNA
---------------------------------------------------------
Task:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development and functioning of 
living organisms. If you want to know more: http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and 
"G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty or 
there is no DNA at all (again, except for Haskell). More similar exercise are 
found here: http://rosalind.info/problems/list-view/ (source)

Example:
"ATTGC" --> "TAACG"
"GTAT"  --> "CATA"

Link:
https://www.codewars.com/kata/554e4a2f232cdd87d9000038
---------------------------------------------------------*/

// // Cara 1
// export class Kata {
//   static dnaStrand(dna: string) {
//     let result = ""
//     for (let i = 0; i < dna.length; i++) {
//       if (dna[i] == "A") {
//         result += "T"
//       } else if (dna[i] == "T") {
//         result += "A"
//       } else if (dna[i] == "C") {
//         result += "G"
//       } else {
//         result += "C"
//       }
//     }
//     return result
//   }
// }

// Cara 2
// export class Kata {
//   static dnaStrand(dna: string) {
//     let result = ""
//     for (let i = 0; i < dna.length; i++) {
//       result += dna[i] == "A" ? "T" : dna[i] == "T" ? "A" : dna[i] == "C" ? "G" : "C"
//     }
//     return result
//   }
// }

// Pakai Bantuan Cara Lebih Sederhana (Bukan Hasil Sendiri)
export class Kata {
  static dnaStrand(dna: string) {
    return dna.replace(/./g, (c) => (({A:'T',T:'A',G:'C',C:'G'} as Record<string, string>)[c]));
  }
}

console.log(Kata.dnaStrand("TATAT"));