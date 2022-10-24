//business logic
let newStr;
let reversedString;
let finalString;

function newString(string) {
  let firstLetter = string.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  let lastLetter = string.slice(-1);
  lastLetter = lastLetter.toUpperCase();
  newStr = firstLetter + lastLetter;
  return newStr;
}

function reverse(string) {
  reversedString = newString(string).split("").reverse().join("");
  return reversedString;
}

function call() {
  let twoLetterStr = newString(string);
  reverse(twoLetterStr);
  finalString = string.concat(reverse(twoLetterStr));
  return finalString;
}

function countLetter(string) {
  let lengthOfString = string.length;
  window.alert(lengthOfString);
  let letter = call().charAt(Math.floor(lengthOfString / 2));
  let newSentence = letter.concat(call());
  let reversedSentence = newSentence.split("").reverse().join("");
  window.alert(reversedSentence);


}
//user interface
let string = window.prompt("Please enter a sentence");
window.alert(string);
call();
countLetter(string);