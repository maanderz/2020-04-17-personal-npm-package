// a function that capitalizes every work in a sentence
const capitalize = (str) => {
  let sentence = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    // checking if there is a space before
    if (str[i - 1] === ' ') {
      sentence += str[i].toUpperCase();
    } else {
      sentence += str[i];
    }
  }
  return sentence;
}

module.exports = capitalize;

