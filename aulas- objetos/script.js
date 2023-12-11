
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