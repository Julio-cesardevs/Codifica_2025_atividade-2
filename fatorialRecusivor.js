const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fatorial(n) {
  if (n < 0) {
    throw new Error('O fatorial não está definido para números negativos.');
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

rl.question('Digite um número inteiro para calcular o fatorial: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else {
    try {
      const resultado = fatorial(numero);
      console.log(`Fatorial de ${numero} é: ${resultado}`);
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }

  rl.close();
});