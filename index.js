// Uppercase the first character of string
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.split(this.charAt(0))[1];
}


// Uppercase the first letter of each word in a string
String.prototype.capitalizeEachWord = function() {

  const words = this.split(" ");
  const upperCasedWords = [];

  words.map(word => {
    upperCasedWords.push(word.capitalize());
  });
  return upperCasedWords.join(" ");
}


// Uppercase every other letter
String.prototype.capitalizeEveryOther = function() {

  let newStr = "";

  this.split("").forEach((letter, i) => {
    i % 2
    ? newStr += letter.toUpperCase()
    : newStr += letter
  });

  return newStr;

}


// Write a function that removes all whitespace from a given string
String.prototype.removeWhitespace = function() {

  let newStr = "";

  this.split(" ").map(word => {
    newStr += word;
  });

  return newStr;
}


// Write a function that removes only the extra whitespace from a given string (example: “ a        b ” → “a b”)
String.prototype.removeExtraSpace = function() {

  const charList = this.split("");
  let newStr = "";

  charList.forEach((char, i) => {
    ((char == " ") && (charList[i+1] == " "))
    ? newStr += ""
    : newStr += char
  });
return newStr;
}




// Tests

// console.log("hello world".capitalize());
// console.log("the quick brown fox".capitalizeEachWord());
// console.log("abcdefg".capitalizeEveryOther());
// console.log("the quick brown fox with no spaces".removeWhitespace());
// console.log("this sentence      had    too        much  space".removeExtraSpace());