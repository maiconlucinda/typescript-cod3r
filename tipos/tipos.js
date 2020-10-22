"use strict";
// stirng
var nome = 'Maicon';
console.log(nome);
// nome = 18;
// console.log(nome);
// number
var idade = 27;
idade = 25.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = 'Idade é 27';
console.log(typeof minhaIdade);
// Array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
hobbies = 100;
hobbies = [2];
// Tupla
var endereco1 = ["Cabo Verde", 65];
var endereco2 = ["Av Principal", 99, 135];
console.log(endereco1, endereco2);
// Funções
function retornaSomado(num1, num2) {
    return num1 + num2;
}
console.log(retornaSomado(3, 5));
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// Função como tipo
/**
 * Forma de eu tipar uma variável para receber somente função (função como tipo), será uma
 * sintaxe parecida com array function.
 * Preciso dizer quais quais os tipos dos parametros e também qual o retorno.
 * A partir desse momento a variável só receberá uma função se o tipo bater.
 */
var calculo;
// calculo = digaOi; // Se eu usar os construtores, não posso repetí-los lá em baixo.
// calculo();
calculo = multiplicar; // Dessa forma não tenho nenhuma amarração na let calculo;
// Objeto como tipo
// Embora o Typescript já infere o valor, nesse caso estou explicitando o valor que quero.
var usuario = {
    nome: 'Joao',
    idade: 27
};
// usuario = 1;
// usuario = {}
// let usuario = {
//   nome: 'Maicon',
//   idade: 20
// }
usuario = {
    nome: 'Maicon',
    idade: 20
};
