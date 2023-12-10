/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const vowels = { a: true, e: "true", o: true, i: true, u: true };

function countVowels(str) {
  let count = 0
  str.split('').forEach(ch => {
    if(vowels[ch.toLowerCase()]){
      count++;
    }
  })
  return count;
}

module.exports = countVowels;
