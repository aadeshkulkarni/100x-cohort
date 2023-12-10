/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let input = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:?{}=\-_`~() ]/g,"")
  console.log(input)
  for(let i=0,j=input.length-1;i<j;i++,j--){
    if(input[i] !== input[j]){
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("Eva, can I see bees in a cave?"))
module.exports = isPalindrome;
