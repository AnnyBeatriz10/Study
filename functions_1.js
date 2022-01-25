/*
// function expression
// function anonymous
// parâmetros (parameters)
const sum = function (number1, number2) {
  total = number1 + number2;
  return total;
};

let number1 = 34;
let number2 = 25;

console.log(`o nuúmero 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

// function scope

let subject;

function createThink() {
  subject = "study";
  return subject;
}

console.log(subject);
createThink();
console.log(subject);
*/

/*
// function hoistng

sayMyName();

function sayMyName() {
  console.log("Anny");
};
*/

/*
// arrow function

const sayMyName = (name) => {
  console.log(name);
};
sayMyName("Anny");
*/

// callback function

function sayMyName(name) {
  console.log("antes de executar a função callback");

  name();

  console.log("depois de executar a callback");
}

sayMyName(() => {
  console.log("estou em uma callback");
});
