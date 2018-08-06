jQuery(document).ready(function() {

var inputSentence = prompt("type in a sentence");
var AnnounceSentence = function(inputSentence) {
  return inputSentence;
};
alert(inputSentence);

var firstLetter = inputSentence.charAt(0).toUpperCase();
var lastLetter = inputSentence.slice(-1).toUpperCase();
alert(firstLetter + lastLetter);
alert(lastLetter + inputSentence.substr(1).slice(0, -1) + firstLetter);

var chopSetence = function(inputSentence) {
  return  inputSentence.charAt(0).toUpperCase() + inputSentence.slice(-1).toUpperCase();
};

var chopSetence = function(inputSentence) {
  return  inputSentence.slice(-1).toUpperCase() + inputSentence.charAt(0).toUpperCase();
};

alert(chopSetence(inputSentence));

alert(inputSentence + chopSetence(inputSentence));
var countLetters = function(inputSentence) {
  return parseInt(inputSentence.length / 2);
};
alert(countLetters(inputSentence));

var newSentence = function(inputSentence) {
  return inputSentence.charAt(countLetters(inputSentence));
};

var bigSentence = newSentence(inputSentence) + inputSentence + chopSetence(inputSentence);

var textToRev = newSentence(bigSentence) + bigSentence + chopSetence(bigSentence);

function reverse(textToRev) {
    return textToRev.split("").reverse().join("");
};

alert(reverse(textToRev));





});
