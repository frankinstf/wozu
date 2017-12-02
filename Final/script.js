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

    // document.getElementById('totalVowels').innerHTML = totalVowels;
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

// window.onload = function() {
//
//   var input = document.getElementById('input');
//   var calculate = document.getElementById('calculate');
//
//   var totalVowels = 0;
//   var totalAs = 0;
//   var totalEs = 0;
//   var totalIs = 0;
//   var totalOs = 0;
//   var totalUs = 0;
//   var totalYs = 0;
//
//   calculate.addEventListener('click', function() {
//     var textToAnalyze = input.value;
//     for(var i = 0; i < textToAnalyze.length; i++) {
//       if(isVowel(textToAnalyze[i])) {
//         totalVowels++;
//         incrementVowelCount(textToAnalyze[i]);
//       }
//     }
//
//     document.getElementById('totalVowels').innerHTML = totalVowels;
//     document.getElementById('percentA').innerHTML = totalAs / totalVowels * 100;
//     document.getElementById('percentE').innerHTML = totalEs / totalVowels * 100;
//     document.getElementById('percentI').innerHTML = totalIs / totalVowels * 100;
//     document.getElementById('percentO').innerHTML = totalOs / totalVowels * 100;
//     document.getElementById('percentU').innerHTML = totalUs / totalVowels * 100;
//     document.getElementById('percentY').innerHTML = totalYs / totalVowels * 100;
//
//     totalVowels = 0;
//     totalAs = 0;
//     totalEs = 0;
//     totalIs = 0;
//     totalOs = 0;
//     totalUs = 0;
//     totalYs = 0;
//   });
//
//   function isVowel(letter) {
//     letter = letter.toUpperCase();
//     return letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U' || letter == 'Y';
//   }
// function incrementVowelCount(letter) {
//   letter = letter.toUpperCase();
//   if(letter == 'A'){
//     totalAs++;
//   } else if (letter == 'E') {
//     totalEs++;
//   } else if (letter == 'I') {
//     totalIs++;
//   } else if (letter == 'O') {
//     totalOs++;
//   } else if (letter == 'U') {
//     totalUs++;
//   } else if (letter == 'Y') {
//     totalYs++;
//   }
// }
// };
