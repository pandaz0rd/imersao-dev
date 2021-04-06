var consumoMedio = parseFloat(prompt("Digite o consumo médio de combustível do seu veículo:"))

var distancia = parseFloat(prompt("Digite a distância a ser percorrida em KM:"))

var valorCombustivel = parseFloat(prompt("Digite o valor do combustível na sua região:"))

var combustivelNecessario = parseFloat(distancia / consumoMedio).toFixed(2)

var calculoCombustivel = parseFloat(combustivelNecessario * valorCombustivel).toFixed(2)


alert("Para percorrer " + distancia + "KM" + " o gasto de combustível será de " + "R$" + calculoCombustivel)