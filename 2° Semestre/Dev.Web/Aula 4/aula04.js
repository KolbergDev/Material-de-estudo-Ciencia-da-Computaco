// Exercício 4 - Cadastro de cliente de cinema
// Regra da promoção: menores de 26 anos ou maiores de 60 anos pagam meia-entrada

const nomeCliente = "Eduardo";
let idadeCliente = 18;

const idadeMinimaIdoso = 60;
const limiteJovem = 26;

console.log(`nomeCliente é do tipo: ${typeof nomeCliente}`);
console.log(`idadeCliente é do tipo: ${typeof idadeCliente}`);
console.log(`idadeMinimaIdoso é do tipo: ${typeof idadeMinimaIdoso}`);
console.log(`limiteJovem é do tipo: ${typeof limiteJovem}`);

const Jovem = idadeCliente < limiteJovem;
const Idoso = idadeCliente >= idadeMinimaIdoso;
const temDireitoPromocao = Jovem||Idoso;

console.log(`temDireitoPromocao é do tipo: ${typeof temDireitoPromocao}`);

let anosParaIdoso = idadeMinimaIdoso - idadeCliente;

console.log(`anosParaIdoso é do tipo: ${typeof anosParaIdoso}`);

const mensagem = temDireitoPromocao
   ?`Olá ${nomeCliente}, você tem ${idadeCliente} anos e tem direito à meia-entrada!`
  :`Olá ${nomeCliente}, você tem ${idadeCliente} anos e ainda não se encaixa na promoção. 
  Faltam ${anosParaIdoso} anos para você ter direito por idade (60+).`;

console.log(mensagem);
