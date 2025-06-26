const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função debounce
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Função que será "protegida" pelo debounce
function processarEntrada(texto) {
  console.log(`Executando após pausa: ${texto}`);
}

// Cria uma nova função com debounce de 1000ms
const entradaDebounce = debounce(processarEntrada, 1000);

console.log('Digite algo (espera 1 segundo parado para processar):');
rl.on('line', (input) => {
  entradaDebounce(input);
});
