function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* 
  Add your pseudocode here
1. Convert the input string to an array of characters using the `split` method.
2. Reverse the array using the `reverse` method.
3. Join the reversed array back into a string using the `join` method.
4. Compare the reversed string with the original string.
5. If they are the same, return `true`; otherwise, return `false`.
*/

/*
  Add written explanation of your solution here

  The isPalindrome function takes a string as an argument. It converts the string into an array of characters using the split method, then reverses the array using the reverse method, and finally joins the reversed array back into a string using the join method. The function then compares the reversed string with the original string using the === operator. If they are equal, it means the string is a palindrome, and the function returns true. Otherwise, it returns false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
