//! stirng
let nome = 'Maicon';
console.log(nome)
// nome = 18;
// console.log(nome);



//! number
let idade = 27;
idade = 25.5;
console.log(idade);



//! boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);



//! tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = 'Idade é 27'
console.log(typeof minhaIdade);



//! Array
let hobbies: any = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);

hobbies = 100;
hobbies = [2];



//! Tupla
let endereco1: [string, number] = ["Cabo Verde", 65];
let endereco2: [string, number, number] = ["Av Principal", 99, 135];
console.log(endereco1, endereco2);



//! Funções
function retornaSomado(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(retornaSomado(3, 5));

function digaOi(): void {
  console.log('Oi')
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}


//! Função como tipo
/**
 * Forma de eu tipar uma variável para receber somente função (função como tipo), será uma
 * sintaxe parecida com array function.
 * Preciso dizer quais quais os tipos dos parametros e também qual o retorno.
 * A partir desse momento a variável só receberá uma função se o tipo bater.
 */
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi; // Se eu usar os construtores, não posso repetí-los lá em baixo.
// calculo();

calculo = multiplicar; // Dessa forma não tenho nenhuma amarração na let calculo;



//! Objeto como tipo
// Embora o Typescript já infere o valor, nesse caso estou explicitando o valor que quero.
let usuario: { nome: string, idade: number } = {
  nome: 'Joao',
  idade: 27
}

// usuario = 1;
// usuario = {}

// let usuario = {
//   nome: 'Maicon',
//   idade: 20
// }

usuario = {
  nome: 'Maicon',
  idade: 20
}


//! Union Types
let nota: any = 10; // Posso usar o any mas voltaria com a viagem Javascript.
console.log(`Minha nota é ${nota}`);

let nota2: number | string = 10; // Usando o union posso colocar tudo.
console.log(`Minha nota é ${nota}`);


//! Never
//Nunca cehagará ao final sem dar um erro.
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: '    ',
  preco: -1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preco inválido');
    }
  }
}
produto.validarProduto();