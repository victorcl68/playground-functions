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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
