// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(astring) {
  let phrase = astring.split(" ");
  return phrase;
}

//  Para resolver o desafio 3 consultei uma pergunta feita no seguinte site:
//  https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres

// Desafio 4
function concatName(name) {
  let thename = name.split(" ");
  return thename[thename.length-1] + ", " + thename[0];
}
// Para resolver o desafio 4 consultei o Slack da turma 10, tribo b

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
