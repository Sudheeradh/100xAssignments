/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  arr = []
  for (s of str) {
    if (s >= 'a' && s <= 'z') {
      arr.push(s);
    }
  }
  str = arr.join('');
  
  let l = 0;
  let r = str.length - 1;

  while (r >= l) {
    if (str[r] === str[l]) {
      ++l;
      --r;
    } else {return false}
  }

  return true;
}

console.log(isPalindrome('level'))

module.exports = isPalindrome;
