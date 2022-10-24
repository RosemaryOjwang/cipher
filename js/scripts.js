//business logic
let newStr;
let reversedString;
function newString(string)  {
  let firstLetter = string.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  window.alert(firstLetter);
  let lastLetter = string.slice(-1);
  lastLetter = lastLetter.toUpperCase();
  window.alert(lastLetter);
  newStr = firstLetter + lastLetter;
  window.alert(newStr);
  return newStr;
}
function reverse(string)  {
  let firstLetter = newStr.slice(0,1);
  let secondLetter = newStr.slice(-1);
  reversedString = secondLetter.concat(firstLetter);
  window.alert(reversedString);
  return reversedString;
}
function call() {
  newString(string);
  reverse(newStr);
  let finalString = string.concat(reversedString);
  window.alert(finalString);
  return finalString;
}
function countLetter(string) {
let lengthOfString = string.length;
window.alert(lengthOfString);
let letter =string.charAt(Math.floor(lengthOfString / 2));
window.alert(letter);
let newSentence = letter.concat(string)
window.alert(newSentence);


}
//user interface
let  string = window.prompt("Please enter a sentence");
window.alert(string);
call();
countLetter(string);