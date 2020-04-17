// a function that returns a boolean if input string is a palindrome (reads the same backward as forward)
const palindrome = (str) => {
  const lowerCase = str.toLowerCase();
  const reverse = lowerCase.split('').reverse().join('');
  return (reverse === lowerCase ? true : false);
}

module.exports = palindrome;

