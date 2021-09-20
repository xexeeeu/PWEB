var nome = prompt('Digite o nome do aluno: ')

var nota1 = prompt('Digite a Nota 1:');
var nota1Num = parseFloat(nota1);

var nota2 = prompt('Digite a Nota 2:');
var nota2Num = parseFloat(nota2);

var nota3 = prompt('Digite a Nota 3:');
var nota3Num = parseFloat(nota3);

alert('Media do aluno ' + nome + ' = ' +((nota1Num+nota2Num+nota3Num)/3));