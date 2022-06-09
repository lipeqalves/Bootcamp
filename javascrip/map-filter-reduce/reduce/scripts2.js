function listaCompras(saldoDisponivel, list){
  return list.reduce((prev, corrent) => {
      return prev - corrent.preco;
  },saldoDisponivel);
}

const saldoDisponivel = 100;


const list = [
  {
    nome: 'sabao',
    preco: 15
  },
  {
    nome: 'pao',
    preco: 5
  },
  {
    nome: 'queijo',
    preco: 7
  },
  {
    nome: 'feijão',
    preco: 8
  },
  {
    nome: 'carne',
    preco: 28
  }
];

console.log(`Saldo disponivel:  ${listaCompras(saldoDisponivel,list)} reais`);
