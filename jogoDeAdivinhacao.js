const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function perguntarPalpite() {
  rl.question('Adivinhe o número (entre 1 e 100): ', (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite)) {
      console.log('Por favor, digite um número válido.');
      perguntarPalpite();
    } else if (palpite < numeroAleatorio) {
      console.log('Mais alto!');
      perguntarPalpite();
    } else if (palpite > numeroAleatorio) {
      console.log('Mais baixo!');
      perguntarPalpite();
    } else {
      console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
      rl.close();
    }
  });
}

perguntarPalpite();
