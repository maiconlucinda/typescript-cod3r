
let canal: string = 'Graveta';
let inscrito: number = 610234;

// Mesmo com esse erro, por padrão a compilação será feita.
// canal = inscrito;
console.log(canal)


//! Checagem de nulo
function saudar(isManha: boolean, horas: number): string {
  let saudacao: string;

  let maicon = 'Maicon';
  if (isManha) {
    saudacao = 'Bom dia!'
  }
  return maicon;
}