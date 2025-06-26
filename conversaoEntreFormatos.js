const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Converte array de pares em objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

// Converte objeto em array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

// Menu simples para testar as funções
rl.question('Digite "1" para pares → objeto ou "2" para objeto → pares: ', (opcao) => {
  if (opcao === '1') {
    rl.question('Digite um array de pares (ex: [["a",1],["b",2]]): ', (entrada) => {
      try {
        const pares = JSON.parse(entrada);
        const resultado = paresParaObjeto(pares);
        console.log('Objeto resultante:', resultado);
      } catch (e) {
        console.log('Erro ao processar a entrada.');
      }
      rl.close();
    });
  } else if (opcao === '2') {
    rl.question('Digite um objeto (ex: {"a":1,"b":2}): ', (entrada) => {
      try {
        const obj = JSON.parse(entrada);
        const resultado = objetoParaPares(obj);
        console.log('Array de pares:', resultado);
      } catch (e) {
        console.log('Erro ao processar a entrada.');
      }
      rl.close();
    });
  } else {
    console.log('Opção inválida.');
    rl.close();
  }
});
