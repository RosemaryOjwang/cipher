//business logic
let newStr;
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
  let reversedString = secondLetter.concat(firstLetter);
  window.alert(reversedString);
  return reversedString;
}
function call() {
  newString(string);
  reverse(newString(string));
}
//user interface
let  string = window.prompt("Please enter a sentence");
window.alert(string);
