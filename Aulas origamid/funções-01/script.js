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

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
//   }
//   function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
//   }
//   precisoVisitar(20);
//   jaVisitei(20);
  