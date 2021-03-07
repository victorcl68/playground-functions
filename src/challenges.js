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
    if (arr[index] > bigger) {
      bigger = arr[index];
      biggerrepeat = 1;
    } else if (arr[index] === bigger) {
      biggerrepeat += 1;
    }
  }
  return biggerrepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer = '';
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    answer = 'cat1';
  } else if ((Math.abs(mouse - cat2)) < (Math.abs(mouse - cat1))) {
    answer = 'cat2';
  } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(arrayfb) {
  for (let index = 0; index < arrayfb.length; index += 1) {
    if (arrayfb[index] % 15 === 0) {
      arrayfb[index] = 'fizzBuzz';
    } else if (arrayfb[index] % 3 === 0) {
      arrayfb[index] = 'fizz';
    } else if (arrayfb[index] % 5 === 0) {
      arrayfb[index] = 'buzz';
    } else {
      arrayfb[index] = 'bug!';
    }
  }
  return arrayfb;
}
console.log(fizzBuzz([7, 9]));

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
