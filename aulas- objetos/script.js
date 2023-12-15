
var pessoa = {
    nome: 'Marcos',
    idade:39,
    profissao: 'Desenvolvedor' + ' Optomestrista',
    Faculdade: 'Analise e Desenvolvimento de Sistemas',
}
console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado) { return lado * lado },
    perimetro: function(lado) { return this.lados * lado },
}
console.log(quadrado.area(5),);
console.log(quadrado.perimetro(5),);

console.log(Math.PI)


var menu = {
    within: 800,
    height: 60,
    backgroundColor: '#84e',
    color:'blue',

    metadeHeight () {
        return this.height / 2;
    }
}
console.log("Largura: " + menu.within);
console.log("Altura: " + menu.height);
console.log("Cor de Fundo: " + menu.backgroundColor);
console.log("Metade da Altura: " + menu.metadeHeight());
console.log("A cor é: " + menu.color);

// Crie um objeto com os seus dados pessoais
var dados = {
    nome:'Marcos',
    sobrenome: ' Aurelio',
    idade:39,
    time: 'Flamengo',
}
console.log( dados)
console.log (dados.nome + dados.sobrenome)

// Deve possui pelo menos duas propriedades nome e sobrenome

 dados.nomeCompleto = function () {
    console.log(`${this.nome} ${this.sobrenome}`);
    return '${this.nome} ${this.sobrenome}';
 }

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dados.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000
  console.log(carro.preco);
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raca:'Labrador',
    cor:'Preto',
    idade:10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Latir';
        } else  {
            return 'abanar o rabo';
        }
    }
  }
  console.log(cachorro); 
  console.log(cachorro.latir()); 
  console.log(cachorro.latir('homem')); 
