window.onload = function() {

  var input = document.getElementById('input');
  var calculate = document.getElementById('calculate');

  var totalSpace = 0;
  var totalSpaces = 0;
  var totalEs = 0;
  var totalIs = 0;
  var totalOs = 0;
  var totalUs = 0;


  calculate.addEventListener('click', function() {
    var textToAnalyze = input.value;
    for(var i = 0; i < textToAnalyze.length; i++) {
      if(isSpace(textToAnalyze[i])) {
        totalSpace++;
        incrementSpaceCount(textToAnalyze[i]);
      }
    }

    document.getElementById('aveWords').innerHTML = (totalSpaces + 1)  / (totalEs + totalIs + totalOs);
    document.getElementById('percentE').innerHTML = totalSpaces + totalUs;
    document.getElementById('percentI').innerHTML = totalSpaces + 1;
    document.getElementById('percentO').innerHTML = totalEs + totalIs + totalOs;
    
    totalSpace =0;
    totalSpaces = 0;
    totalEs = 0;
    totalIs = 0;
    totalOs = 0;
    totalUs = 0;

  });

  function isSpace(letter) {
    letter = letter.toUpperCase();
    return letter == ' ' || letter == '.' || letter == '?' || letter == '!';
  }
function incrementSpaceCount(letter) {
  letter = letter.toUpperCase();
  if(letter == ' '){
    totalSpaces++;
  } else if (letter == '.') {
    totalEs++;
  } else if (letter == '?') {
    totalIs++;
  } else if (letter == '!') {
    totalOs++;
  } else if (letter == '  ') {
    totalUs++;
  }
}
};
