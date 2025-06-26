const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extrairNomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
    .map(produto => produto.nome);     // extrai apenas os nomes
}

rl.question('Digite uma lista de produtos no formato [{"nome":"Arroz","preco":10}, ...]:\n', (input) => {
  try {
    const produtos = JSON.parse(input);

    if (!Array.isArray(produtos)) {
      throw new Error('A entrada deve ser um array.');
    }

    const resultado = extrairNomesOrdenadosPorPreco(produtos);
    console.log('Nomes ordenados por preço crescente:', resultado);
  } catch (erro) {
    console.log('Erro:', erro.message);
  }

  rl.close();
});


// exemplo de entrada : [{"nome":"Arroz","preco":10},{"nome":"Feijão","preco":8},{"nome":"Macarrão","preco":5}]
