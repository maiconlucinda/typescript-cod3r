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


let contaBancaria: {
  saldo: number,
  depositar: (valor: number) => void,
} = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor;
  }
}

let correntista: {
  nome: string,
  contaBancaria: {
    saldo: number,
    depositar: (valor: number) => void,
  }
  contatos: string[]
} = {
  nome: 'Maicon Lucinda',
  contaBancaria: contaBancaria,
  contatos: ['36052479', '999114080']
}

correntista.contaBancaria.depositar(3000);
console.log(correntista);