jQuery(document).ready(function() {

var inputSentence = prompt("type in a sentence");
var AnnounceSentence = function(inputSentence) {
  return inputSentence;
}
alert(inputSentence);

var firstLetter = inputSentence.charAt(0).toUpperCase();
var lastLetter = inputSentence.slice(-1).toUpperCase();
alert(firstLetter + " " + lastLetter);
alert(firstLetter + inputSentence.substr(1).slice(0, -1) + lastLetter);








});
