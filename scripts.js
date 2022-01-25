// Object
/*
const person = {
  name: "John",
  age: 30,
  weight: 88.6,
  isAdmin: true,
};

console.log(`${person.name} tem ${person.age} anos`);
*/

// Array

/*const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 3,
  },
];

console.log(animals.length);
*/

// Exercices

// 1. Declare uma variável de nome weight
/*
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/*
 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String  
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
/*
let name = "Anny";
let age = 21;
let stars = 4.8;
let isSubscribed = true;

/*
4. A variável student abaixo é de que tipo de dado?
4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
4.2 Mostre no console a seguinte mensagem:

<name> de idade <age> pesa <weight> kg.

atenção: substitua <name> <age> e <weight> pelos valores de cada prorpiedade do objeto
*/
/*
let student = {
  name: "Anny",
  age: 21,
  weight: 62.8,
  isSubscribed: true,
};
console.log(typeof student);
console.log(student);

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg`
);

/*
5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio 
*/
/*
const students = [];

/*
6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
/*
const students = [
  {
    student,
  },
];

/*
7. Coloque no console o valor da posição 0 do Array acima.
*/
/*
console.log(students[0]);

/*
8. Crie um novo student e coloque  na posição 1 do Array students
*/
/*
const John = {
  name: "John",
  age: 23,
  weight: 74.8,
  isSubscribed: true,
};
students[1] = john;
console.log(students);

/*
9.  Sem rodar o código responda qual é a resposta do código abaixo e por que?
Após a sua resposta, rode o código  e veja se você acertou.

console.log(a)
var a = 1

R: a resposta será undefined, pois a variável está sendo chamada antes de ser decalarada, sofrendo o hoistining.
*/

/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

/*
let date = new Date("2022-11-01");
console.log(date);
/*
function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}
const Anny = new Person("Anny");
const john = new Person("John");
console.log(Anny.walk());
console.log(john.walk());
*/

/*
  Prototype

  * prototype-based language
  * prototype chain
  * __photo__
  
*/

/*
  Type conversion(typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo
*/

//console.log(Number("9") + 5);

// Manipulando Strings e Números
// Transformar String em Número e Número em String
/*
let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));
*/

// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
/*
let word = "Paralelepipedo";
console.log(word.length);
let number = 1234;
console.log(String(number).length);
*/

// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
/*
let number = 345.57896541;
console.log(number.toFixed(2).replace(".", ","));
*/

// Manipulando Strings e Números
// Transforme letras minúsculas. Faça o cntrário disso também
/*
words = ["banana", "maçã", "oi"];

console.log(words[0].toLocaleLowerCase(), words[1].toUpperCase());
*/
// Manipulando Strings e Números

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

/*
let phase = "Eu quero viver um Amor!";
let myArray = phase.split(" ");
let phaseWithUnderscore = myArray.join("_");
console.log(phaseWithUnderscore.toLocaleLowerCase());
*/

// Manipulando Strings e Números

// Verificar se o texto contém a palavra Amor
/*
let phase = "Eu quero viver o Amor!";
verificar = phase.includes("Amor");
if (verificar) {
  console.log("Você é amado!");
}
*/

// >>>> Manipulando Arrays <<<<

// Criar Array com construtor
/*
let myArray = new Array("a", "b", "c");
console.log(myArray);
*/

// Contar elementos de um array

//console.log(["a", "b", "c"].length);

// Trnasformar uma cadeiade caracteresem elementos de um array
/*
let word = "manipulação";
console.log(Array.from(word));
*/

/*
let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push("nodejs");
// Adicionar no começo
techs.unshift("sql");
// remover do fim
//techs.pop();
// remover do começo
//techs.shift();
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3));
// remover um mais itens em qualquer posição do array
//techs.splice(1, 2);
// Encontrar a posição de um elemento no array
let index = techs.indexOf("html");
techs.splice(index, 1);

console.log(techs);
*/

/* >>>> Expressões e operadores <<<<

 - Expressions
 - Operators
    Binary
    Unary
    Ternary
*/
/*
let number = 1;
console.log(false ? "alo" : "nada");
*/

/*

  new 

  *left-hand-side expression
  * criar um novo objeto
*/
/*
let date = new Date("2022-01-11");
console.log(date.__proto__);
*/

/*

  Operadores unários
  typeof
  delete
*/
/*
const person = {
  name: "Anny",
  age: 21,
};
delete person.age;

console.log(person);
*/

/*
// >>>> Operadores Aritméticos <<<<

// multilicação *
//console.log(3.2 * 5.5);
// divisão /
//console.log(12 /2 )
// soma +
//console.log(34 + 67);
// subtração -
//console.log(34 - 23)
// resto da divisão %
let remainder;
remainder = 11 % 10;
//console.log(remainder);
// incremento ++
let increment = 0;
//console.log(++increment);
//console.log(increment);
// decremento --
let decrement = 0;
decrement--;
//console.log(decrement)

// exponencial **
console.log(2 ** 3);
*/

/*
// >>>> Grouping operator ( ) <<<< 

let total = (2 + 3 )* 5;
console.log(total);
*/

// >>> Operadores de comparação <<<

// Irá comparar valores e retornar um Boolean como resposta á comparação

let one = 1;
let two = 2;

// == igual a
console.log(two == 1);
console.log(one == "1");

// !=    diferente de
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// ===    estritamente igual a
console.log(one == "1");
console.log(one == 1);

// !==     estritamente diferente de
console.log(two !== "2");
console.log(two !== 2);
