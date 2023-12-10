console.log('Hello world');

function areaQuadrado (lado) {
    return  lado * lado;
}

areaQuadrado(4) 
areaQuadrado(5)
areaQuadrado(2)



console.log(areaQuadrado(4), areaQuadrado(5), areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5*pi(); 
console.log(total,pi());


function imc(peso,altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

imc(90, 1.80)
imc(60, 1.70)
imc(90, 1.60)

console.log(imc(80, 1.80));
console.log(imc(60, 1.70));
console.log(imc(90, 1.60));

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu olho para o céu';
    } else if (cor === 'verde') {
        return 'eu olho para as arvores';
    } else return 'Nada se faz';
}

console.log(corFavorita('azul' ,'verde', ' '));

addEventListener('click' , function(){ console.log('Oi') });

function imc2(peso,altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}
imc2(50, 1.80);

function terceiraIdade(idade) {
    if (idade >= 65) {
        console.log('É idoso');
    } else if (idade <= 65 && idade >= 35) {
        console.log('É um adulto');
    } else {
        console.log('Ainda não é idoso ou adulto');
    }
}
    terceiraIdade(typeof 65);


// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor) {
    return !!valor; // O operador !! converte o valor para um booleano
  }
  
  // Exemplos de uso:
  console.log(isTruthy(true));    // true
  console.log(isTruthy(42));      // true
  console.log(isTruthy("Hello")); // true
  console.log(isTruthy([]));       // true
  console.log(isTruthy({}));       // true
  
  console.log(isTruthy(false));   // false
  console.log(isTruthy(0));       // false
  console.log(isTruthy(null));    // false
  console.log(isTruthy(undefined));// false
  console.log(isTruthy(""));      // false
  

// Crie uma função matemática que retorne o perímetro de um quadrado

function calcularPerimetroQuadrado(lado) {
    if (typeof lado !== 'number' || lado <= 0) {
      // Verifica se o lado é um número positivo
      console.error('O lado do quadrado deve ser um número positivo.');
      return undefined; // Retorna undefined se o lado não for válido
    }
  
    const perimetro = 4 * lado; // Fórmula do perímetro de um quadrado
    return perimetro;
  }
  
  // Exemplo de uso:
  const ladoQuadrado = 5;
  const perimetroQuadrado = calcularPerimetroQuadrado(ladoQuadrado);
  
  if (perimetroQuadrado !== undefined) {
    console.log(`O perímetro do quadrado com lado ${ladoQuadrado} é: ${perimetroQuadrado}`);
  } else {
    console.log('Erro ao calcular o perímetro do quadrado.');
  }
  
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNomeCompleto() { return 'Marcos';
}
function meuSobreNome() { return 'Aurelio'}

var nome = meuNomeCompleto();
var sobrenome = meuSobreNome()

console.log(nome, sobrenome);


// Crie uma função que verifica se um número é par
function ehPar(numero) {
    // Verifica se o resto da divisão por 2 é igual a 0
    if (numero % 2 === 0) {
      return true; // O número é par
    } else {
      return false; // O número é ímpar
    }
  }
  
  // Exemplos de uso da função
  console.log(ehPar(6));  // Saída: true (porque 4 é par)
  console.log(ehPar(7));  // Saída: false (porque 7 é ímpar)
  

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (dados) {
  return typeof dados;
}

console.log(tipoDeDado(42));        // Retorna 'number'
console.log(tipoDeDado('Olá'));     // Retorna 'string'
console.log(tipoDeDado(true));      // Retorna 'boolean'
console.log(tipoDeDado({}));        // Retorna 'object'
console.log(tipoDeDado(null));      // Retorna 'object' (Nota: typeof null retorna 'object' por razões históricas)
console.log(tipoDeDado(undefined)); // Retorna 'undefined'


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('click', function () {
  console.log('Marcos aurelio da Silva LIma ');
});

// Substitua 'Seu Nome Completo' pelo seu nome real
const nomeCompleto = 'Ana Julia Rocha Lima';

// Função de callback que será executada quando o evento 'scroll' ocorrer
function mostrarNomeNoConsole() {
  console.log(nomeCompleto);
}

// Adicionando o ouvinte de evento para o evento 'scroll'
window.addEventListener('scroll', mostrarNomeNoConsole);


// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
   
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);

  console.log(precisoVisitar(10));
  console.log(jaVisitei(3));
  