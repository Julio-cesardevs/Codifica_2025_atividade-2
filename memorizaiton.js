const readline = require('readline');

// Cria o cache para armazenar os resultados
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Retornando do cache...');
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

// Exemplo: função fatorial recursiva
function fatorial(n) {
  if (n < 0) throw new Error('Número negativo não é permitido.');
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// Versão memoizada da função fatorial
const fatorialMemoizado = memoize(fatorial);

// Usando readline para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar() {
  rl.question('Digite um número para calcular o fatorial (ou "sair" para encerrar): ', (input) => {
    if (input.toLowerCase() === 'sair') {
      rl.close();
      return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
      console.log('Digite um número válido.');
    } else {
      try {
        const resultado = fatorialMemoizado(num);
        console.log(`Fatorial de ${num} é: ${resultado}`);
      } catch (erro) {
        console.log(`Erro: ${erro.message}`);
      }
    }

    perguntar(); // continua perguntando
  });
}

perguntar();
