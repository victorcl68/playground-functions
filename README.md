# Boas vindas ao repositório do projeto Playground Functions!

# Habilidades

- Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
- Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
- Criar códigos que usam estruturas condicionais, como o if/else .
- Manipular arrays (listas);
- Utilizar o comando for ;
- Quebrar grandes problemas em pequenos;
- Utilizar a lógica de programação na resolução de problemas.
- Manipular objetos;
- Utilizar o comando for/in ;
- Utilizar funções para organizar e estruturar o seu código;

---

## O que foi desenvolvido

Nesse projeto foram feitas algumas funções Javascript para treinar o raciocínio e a linguagem Javascript em si.

---

## Como iniciar o projeto

Para se utilizar do projeto é necessário executar as funções contidas nos arquivos `challenges.js` e/ou `challenges2.js` passando os parametros necessários para elas em um ambiente de desenvolvimento de sua preferência que rode códigos em Javascript.

---

 # Funções (functions):
 
   - 1 - Função com operador `&&` chamada "compareTrue" que, ao receber dois booleanos:

      - Retorne `true` se ambos os valores são verdadeiros;
      - Retorne `false` se um ou ambos os parâmetros forem falsos.


   - 2 - Função que calcula a área do triângulo com o nome "calcArea" que recebe um valor de base (chamado `base`) e outro de altura (chamado `height`) de um triângulo e retorna o cálculo da sua área.

   - 3 - Função que divide uma frase, com o nome de "splitSentence", a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
   
   - 4 - Função que usa concatenação de strings, com o nome de "concatName" que, ao receber uma array de strings, retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.
   
   - 5 - Função que calcula a quantidade de pontos no futebol, com o nome de "footballPoints" que recebe o número de vitórias (esse parâmetro deverá se chamar `wins`) e o número de empates (esse parâmetro deverá se chamar `ties`) e retorna a quantidade de pontos que o time marcou em um campeonato.
Para tanto, considera-se que cada vitória vale 3 pontos e cada empate vale 1 ponto.

  - 6 - Função que calcula a repetição do maior número, chamada "highestCount" que, ao receber uma array de números, retorna a quantidade de vezes que o maior deles se repete.
  
  - 7 - Função de Caça ao rato, chamada "catAndMouse" que, ao receber a posição de `mouse`, `cat1` e `cat2`, nessa ordem, calcula as distâncias entre o rato e os gatos e retorna qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto). Para essa função é admitido que cada um dos três animais está em uma posição representada por um número. Caso os gatos estejam na mesma distância do rato, a função retorna a string `"os gatos trombam e o rato foge"`.

  - 8 - Função FizzBuzz, chamada "fizzBuzz" que recebe um array de números e retorna um array da seguinte forma:
    - Para cada número da Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
    - Para cada número da Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
    - Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
    - Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

  - 9 - Funções que Codificam e Decodificam. A primeira se chama "encode" e, ao receber uma string como parâmetro, troca todas as vogais minúsculas por números, de acordo com o formato a seguir:
  
    - a -> 1 \
    - e -> 2 \
    - i -> 3 \
    - o -> 4 \
    - u -> 5

    A segunda função se chama "decode" e faz o contrário de "encode" - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retorna uma string com vogais minúsculas no lugar dos números.

  - 10 - Função de Lista de tecnologias, que recebe um array de nomes de tecnologias que se quer aprender, e também um segundo parâmetro chamado `name` com um nome.

    Para cada tecnologia no array, é criado um objeto com a seguinte estrutura:

    ```
    {
      tech: "NomeTech",
      name: name
    }
    ```

    Estes objetos serão inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

    A saída da função é uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.

  - 11 - Função de Número de telefone, chamada de "generatePhoneNumber" que recebe uma array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.
  
  - 12 - Função de Condição de existência de um triângulo. Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. A função chamada "triangleCheck" recebe as três linhas como parâmetro e retorna se é possível formar um triângulo com os valores apresentados de cada linha

     - Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

    - O retorno da função será um booleano.

  - 13 - Função de boas vindas ao Bar da Trybe! Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca. A função "hydrate" recebe uma string, e retorna a sugestão de quantos copos de água você deve beber.
 
---
