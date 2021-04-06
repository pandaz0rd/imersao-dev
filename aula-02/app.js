var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
var segundoValor = parseFloat(prompt("Digite o segundo valor: "))
var operacao = prompt("Digite 1 para realizar uma divisão, 2 para subtração, 3 para multiplicação e 4 para soma")

if (operacao == 1) {

  var resultado = parseFloat(primeiroValor / segundoValor)
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")

} else if (operacao == 2) {

  var resultado = parseFloat(primeiroValor - segundoValor)
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")

} else if(operacao == 3) {

   var resultado = parseFloat(primeiroValor * segundoValor)
   document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")

} else if (operacao == 4){

   var resultado = parseFloat(primeiroValor + segundoValor)
   document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")

} else{
    
  document.write("<h2>Opção inválida</h2>")
}

