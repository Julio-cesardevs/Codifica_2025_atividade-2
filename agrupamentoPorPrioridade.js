const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que agrupa vendas por cliente e soma os totais
function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }
    acumulador[venda.cliente] += venda.total;
    return acumulador;
  }, {});
}

rl.question('Digite a lista de vendas no formato [{"cliente":"João","total":100}, ...]:\n', (input) => {
  try {
    const vendas = JSON.parse(input);

    if (!Array.isArray(vendas)) {
      throw new Error('A entrada deve ser um array de objetos.');
    }

    const resultado = agruparPorCliente(vendas);
    console.log('Totais por cliente:', resultado);
  } catch (erro) {
    console.log('Erro:', erro.message);
  }

  rl.close();
});


// exemplo de entrada: 