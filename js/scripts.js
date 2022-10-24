//business logic
function newString(string)  {
  let firstLetter = string.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  window.alert(firstLetter);
  let lastLetter = string.slice(-1);
  lastLetter = lastLetter.toUpperCase();
  window.alert(lastLetter);
  let newStr = firstLetter + lastLetter;
  window.alert(newStr);
  return newStr;
}
//user interface
let  string = window.prompt("Please enter a sentence");
window.alert(string);
newString(string);