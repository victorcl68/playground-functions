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
  let phrase = astring.split(' ');
  return phrase;
}

//  Para resolver o desafio 3 consultei uma pergunta feita no seguinte site:
//  https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}
// Para resolver o desafio 4 consultei o Slack da turma 10, tribo b

// Desafio 5
function footballPoints(wins, ties) {
  let victories = wins * 3;
  return victories + ties;
}

// Desafio 6
function highestCount(arr) {
  let bigger = 0;
  let biggerrepeat = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] >= bigger) {
      bigger = arr[index];
    }
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === bigger) {
      biggerrepeat += 1;
    }
  }
  return biggerrepeat;
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
