// Exercício 5 - Funções de um e-commerce simples

const carrinho = [
  { nome: "Camiseta", preco: 49.9, quantidade: 2 },
  { nome: "Tênis", preco: 199.9, quantidade: 1 },
  { nome: "Boné", preco: 29.9, quantidade: 3 },
];

function exibirItens(carrinho) {
  for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade;
    console.log(`${item.nome} - qtd: ${item.quantidade} - subtotal: R$ ${subtotal.toFixed(2)}`);
  }
}

const calcularTotal = (carrinho) => {
  let total = 0;
  for (const item of carrinho) {
    total += item.preco * item.quantidade;
  }
  return total;
};

function aplicarCupom(valorTotal, cupom) {
  switch (cupom) {
    case "DESCONTO10":
      return valorTotal * 0.9;
    case "MEGADESCONTO":
      return valorTotal * 0.8;
    default:
      if (cupom) {
        console.log("Cupom inválido, nenhum desconto aplicado.");
      }
      return valorTotal;
  }
}

exibirItens(carrinho);

const valorTotal = calcularTotal(carrinho);
console.log(`Total bruto: R$ ${valorTotal.toFixed(2)}`);

const valorFinal = aplicarCupom(valorTotal, "DESCONTO10");
console.log(`Total com cupom: R$ ${valorFinal.toFixed(2)}`);
