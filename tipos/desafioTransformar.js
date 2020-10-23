"use strict";
// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//     this.saldo += valor;
//   }
// }
// let correntista = {
//   nome: 'Maicon Lucinda',
//   contaBancaria: contaBancaria,
//   contatos: ['36052479', '999114080']
// }
// correntista.contaBancaria.depositar(3000)
// console.log(correntista);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Maicon Lucinda',
    contaBancaria: contaBancaria,
    contatos: ['36052479', '999114080']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
