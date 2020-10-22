
let funcionarios: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ['Maicon', 'Natiane', 'Bruna'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(5));