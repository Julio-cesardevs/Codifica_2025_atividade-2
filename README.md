# Exercícios em JavaScript

Este repositório contém uma série de exercícios práticos divididos em três seções principais, que abrangem conceitos de estruturas de controle, funções recursivas, manipulação de arrays e objetos complexos.

---

## Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Função `ehDataValida(dia, mes, ano)` que retorna `true` se a data for válida (considerando meses com 28 a 31 dias e anos bissextos) e `false` caso contrário.

2. **Jogo de Adivinhação**  
   Script que gera um número aleatório de 1 a 100 e pede para o usuário adivinhar. Usa `while` para repetir até acertar, contando tentativas e mostrando dicas "mais alto" ou "mais baixo".

3. **Palavras Únicas**  
   Dada uma string, utiliza `if/else` e `for` para extrair todas as palavras únicas e exibí-las em um array.

---

## Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Implementação recursiva da função `fatorial(n)` que lança erro para `n < 0` e retorna `1` para `n === 0`.

5. **Debounce**  
   Função `debounce(fn, delay)` que retorna uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo `delay` em milissegundos.

6. **Memoization**  
   Função `memoize(fn)` que armazena em cache resultados anteriores da função `fn`, retornando resultados instantâneos para chamadas repetidas com os mesmos argumentos.

---

## Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Função que, dado um array `produtos` com objetos `{ nome, preco }`, retorna um novo array apenas com os nomes, ordenados pelo preço em ordem crescente, usando `map` e `sort`.

8. **Agrupamento por Propriedade**  
   Usar `reduce` para gerar um objeto
