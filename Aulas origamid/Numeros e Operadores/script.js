console.log("Hello Word")

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total)
// resposta = 35

// Crie duas expressões que retornem NaN
var numero = 1 * "p";

console.log(numero);

// Somar a string '200' com o número 50 e retornar 250

var numero1 = "200" ;
var numero2 = 50 ;

console.log(+numero1 +  numero2);

// Incremente o número 5 e retorne o seu valor incrementado

let numero4 = 5;
numero4++;
console.log(numero4); // Isso imprimirá 6 no console


// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(peso)
// Usando parseflot
var numero = '80';
var unidade = 'kg';
var peso = parseFloat(numero); // Convertendo a string para um número
var pesoPorDois = peso / 2;

console.log(pesoPorDois + unidade); // Isso imprimirá 40 no console
