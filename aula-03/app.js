var numeroSecreto = parseInt(Math.random() * 10);
var vidas = 3;

while(vidas > 0) {
  var resposta = parseInt(prompt("Descubra o numéro secreto!" + "\n" + "Digite um número entre 0 e 10"))
                                 
  if(resposta == numeroSecreto) {
    alert("Você acertou! O número secreto é: " + numeroSecreto)
    break;
   
  } else if (resposta > numeroSecreto) {

    alert("O número secreto é menor que " + resposta)
    vidas = vidas - 1;

  } else if (resposta < numeroSecreto) {

    alert("O número secreto é maior que " + resposta)
    vidas = vidas - 1;
  }
}

if(resposta != numeroSecreto) {
    
  alert("Suas vidas acabaram... O número secreto era: " + numeroSecreto)
}