/*
Las reglas del desafó son:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encr(str) {
  let encRules = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
  for (const x in encRules) {
    str = str.replace(new RegExp(x, 'g'), encRules[x]);
  }
  document.getElementById('resultText').innerHTML = str;
  return str;
};

function decr(str) {
  let decRules = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
  for (const x in decRules) {
    str = str.replace(new RegExp(x, 'g'), decRules[x]);
  }
  document.getElementById('resultText').innerHTML = str;
  return str;
};

/*
Función para copiar el texto de un Div
 */
document.getElementById("copyButton").addEventListener("click", function() {
  var copyText = document.getElementById("resultText").innerHTML;

  navigator.clipboard.writeText(copyText)
    .then(function() {
      console.log("Text copied to clipboard: " + copyText);
    })
    .catch(function(error) {
      console.log("Failed to copy text: " + error);
    });
});

// console.log(encr( 'El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.')); // 'hocd-hocd'
