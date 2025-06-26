const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  const palavras = frase.split(' ');
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let repetida = false;

    for (let j = 0; j < unicas.length; j++) {
      if (palavras[i] === unicas[j]) {
        repetida = true;
        break;
      }
    }

    if (!repetida) {
      unicas.push(palavras[i]);
    }
  }

  console.log('Palavras únicas:', unicas);
  rl.close();
});
