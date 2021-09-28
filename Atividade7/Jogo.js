//Escolha do jogador
var playerChoice = prompt('Pedra = 1\nPapel= 2\nTesoura = 3\n\nDigite o número referente à sua escolha:');


var pcChoice = null;

//Escolha do PC
var rNg = Math.random() * 10;
if(rNg <= 2){
    pcChoice = 1;
}
if(rNg >=3 && rNg <= 5);{
    pcChoice = 2;
}
if(rNg >= 6 && rNg <=9){
    pcChoice = 3;
}
//imprimindo a escolha do pc
if(pcChoice == 1){
    alert('Adversário escolheu: Pedra');
}
if(pcChoice == 2){
    alert('Adversário escolheu: Papel');
}
if(pcChoice == 3){
    alert('Adversário escolheu: Tesoura');
}


//Resultados
if(playerChoice == pcChoice){
    alert('Empate!');
}
if(playerChoice == 1 && pcChoice == 2){
    alert('Derrota!');
}
if(playerChoice == 1 && pcChoice == 3){
    alert('Vitória!');
}

if(playerChoice == 2 && pcChoice == 1){
    alert('Vitória!');
}
if(playerChoice == 2 && pcChoice == 3){
    alert('Derrota!');
}

if(playerChoice == 3 && pcChoice == 1){
    alert('Derrota!');
}
if(playerChoice == 3 && pcChoice == 2){
    alert('Vitória!');
}