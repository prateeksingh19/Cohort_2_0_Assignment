/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length<=1){
    return true;
  }

  str = str.replace(/[\.,?!\s+]/g, '');
  for(let i=0,j=str.length -1 ; i<j; i++,j--) {
    if(str[i].toLowerCase() !== str[j].toLowerCase()) return false;
    return true;
  }
}

module.exports = isPalindrome;
