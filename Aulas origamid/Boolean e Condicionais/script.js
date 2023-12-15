
console.log('Hello world!!!');

var possuiGraduacao = true;
var possuiDoutorado = false

if (possuiGraduacao) {
    console.log('É verdadeiro')
}  if (possuiDoutorado) {
}else {
    console.log('É falso');
}

var x = '10'

console.log( x===10);

var y = 10;

console.log( y===10);

if((5-5) && (5+5)){
  console.log(verdadeiro);
}
var condicional2 = (5-5) || (5+5) && (10-2);
console.log(condicional2);

var corFavorita = 'Amarelo';

switch (corFavorita) {
 case 'Azul':
  console.log('Olhe para o céu');
  break;
  case 'Amarelo':
  console.log('Olhe para sol');
  break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
    default:
      console.log('Feche seus olhos');
}
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

 var minhaIdade = 39;
 var idadeEsposa =41;
 if (minhaIdade > idadeEsposa){
  console.log('É maior ');
 } else if (minhaIdade === idadeEsposa){
  console.log('É igual');
 } else {
  console.log('É menor');
 }


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!possuiDoutorado,!!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil é maior que a China')
}else {
  console.log('Brasil tem menos habitantes' )
}
// O que irá aparecer no console?
if(('gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

