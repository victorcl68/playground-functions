// Desafio 10
function techList(theArray, theString) {
  let output = [];
  let lastArray = [];
  const arrrayInOrder = theArray.sort();
  if (theArray.length > 0) {
    for (let index = 0; index < theArray.length; index += 1) {
      let theObject = {
        tech: arrrayInOrder[index],
        name: theString,
      };
      lastArray.push(theObject);
    }
    output = lastArray;
  } else {
    output = 'Vazio!';
  }
  return output;
}

// Desafio 11
const mensagemErro = 'não é possível gerar um número de telefone com esses valores';
function makingPhoneNumber(num, index) {
  let repeated = 0;
  for (let count = 0; count < num.length; count += 1) {
    if (num[index] === num[count]) {
      repeated += 1;
    }
    if (repeated >= 3) {
      return true;
    }
  }
}

function settingNumber(num) {
  for (let index = 0; index < num.length; index += 1) {
    if ((num[index] < 0 || num[index] > 9) || makingPhoneNumber(num, index)) {
      return true;
    }
  }
}

function generatePhoneNumber(num) {
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (settingNumber(num)) {
    return mensagemErro;
  }
  num.splice(0, 0, '(');
  num.splice(3, 0, ')');
  num.splice(4, 0, ' ');
  num.splice(10, 0, '-');
  const numFinal = num.join('');
  return numFinal;
}
console.log(generatePhoneNumber([-4, 1, 1, 3, 4, 5, 6, 7, 8, 9, 0]));

// Desafio 12
const firstCondition = (lineA, lineB, lineC) => {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
};
const secondCondition = (lineA, lineB, lineC) => {
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
};
const thirdCondition = (lineA, lineB, lineC) => {
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
};

function triangleCheck(lineA, lineB, lineC) {
  if (firstCondition(lineA, lineB, lineC)
  || secondCondition(lineA, lineB, lineC)
  || thirdCondition(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let num = string.replace(/\D/g, '');
  let water = 0;
  for (let index = 0; index < num.length; index += 1) {
    water += parseInt(num[index], 10);
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}
// Tive o entendimento sobre as 'RegExp' principalmente pelo site:
// https://www.luiztools.com.br/post/15-dicas-e-truques-da-linguagem-javascript/#6

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
