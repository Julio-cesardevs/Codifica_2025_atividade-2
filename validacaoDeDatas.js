const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o Ano: ', (input) => {
  const ano = parseInt(input);

  function isLeapYear(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }

  console.log(isLeapYear(ano) ? 'Ano bissexto' : 'Ano comum');
  rl.close();
});






