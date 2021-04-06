var cartaTeemo = {nome:"Teemo", imagem: "https://i.pinimg.com/564x/81/ca/db/81cadbbaf53b1bfd3c842d0c06c2254d.jpg",atributos:{Vida: 20, Ataque:50, Velocidade:90}};
var cartaRiven = {nome:"Riven",imagem: "https://pbs.twimg.com/media/ECvsPFgX4AAlrIH.png", atributos:{Vida: 45, Ataque:80, Velocidade:65}};
var cartaOrnn = {nome:"Ornn", imagem:"https://pbs.twimg.com/media/DHfTQCrVwAAHzMM.jpg", atributos:{Vida: 95, Ataque:25, Velocidade:45}};
var cartaDarius = {nome:"Darius", imagem:"https://i.pinimg.com/originals/17/cb/48/17cb488f73d7390068b40cb416afd0b2.png", atributos:{Vida: 70, Ataque:88, Velocidade:55}};
var cartaNidalee = {nome:"Nidalee", imagem:"https://art.ngfiles.com/images/524000/524694_tijnob_nidalee-cougar.png?f1498400608", atributos:{Vida: 25, Ataque:75, Velocidade:85}};
var cartaCamille = {nome:"Camille", imagem:"https://pbs.twimg.com/media/C8e4usLV0AA3lsE?format=jpg&name=medium", atributos:{Vida: 30, Ataque:85, Velocidade:35}};
var cartaAkali = {nome:"Akali", imagem:"https://i.redd.it/67exsf3f7lk21.jpg", atributos:{Vida: 45, Ataque:75, Velocidade:35}};
var cartaMundo = {nome:"Dr.Mundo", imagem:"https://cdna.artstation.com/p/assets/images/images/017/362/616/large/gabriel-brandao-alves-color-022-dr-mundo.jpg?1555654105", atributos:{Vida: 90, Ataque:25, Velocidade:45}};
var cartas = [cartaTeemo,cartaRiven,cartaOrnn, cartaDarius,cartaNidalee,cartaCamille,cartaAkali,cartaMundo];
var cartaJogador = "";
var cartaMaquina = "";
var pontosJogador = 0;
var pontosMaquina = 0;
//var contadorRodadas = 1;

function atualizarPlacar(){
    var divPlacar = document.getElementById('placar');
    var html = "Placar: " + "Jogardor - " + pontosJogador + " | " + "Maquina - " + pontosMaquina;

    divPlacar.innerHTML = html;

}

atualizarPlacar()

function gerenciarCartas(){
    var divCartas = document.getElementById('quantidade-cartas');
    var html = "Quantidades de cartas: " + cartas.length;

    divCartas.innerHTML = html;
}


function sortearCarta(){

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirCartaJogador();

    if(contadorRodadas % 2 ==0){
        rodadaMaquina();
    }
}

function exibirCartaJogador(){

    var divCartaJogador = document.getElementById('carta-jogador');
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesNaTela = "";
    var html = "<div id='opcoes' class='carta-status'>";

    for(var atributo in cartaJogador.atributos){

        opcoesNaTela += "<label><input type='radio' class='nes-radio' name='atributo' value='"+atributo+"'><span>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" + "</span></label>"

    }

    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    divCartaJogador.innerHTML = moldura+nome+html+opcoesNaTela+'</div>'
}

function exibirCartaMaquina(){
    divCartaMaquina = document.getElementById('carta-maquina');
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesNaTela = "";
    var html = "<div id='opcoes-maquina' class='carta-status-maquina'>";

    for(var atributo in cartaMaquina.atributos){

        opcoesNaTela += "<p type='text' name='atributo' value='" + " " + atributo + " " +"'>" + atributo + " " + cartaMaquina.atributos[atributo];

    }

    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesNaTela+'</div>'
}

function opcaoEscolhida(){

    var radioAtributo = document.getElementsByName('atributo');

    for(var i = 0; i < radioAtributo.length; i++){
        
        if(radioAtributo[i].checked){

            return radioAtributo[i].value;
        }
    }
}

/*function rodadaMaquina(){
    
    var valores = Object.values(cartaComputador.atributos)
    var chaves = Object.keys(cartaComputador.atributos)
    var maiorAtributo = Math.max(...valores)
    
    document.getElementById("btnJogar").disabled = false
    
    for (i = 0; i < valores.length; i++) {
      if (valores[i] == maiorAtributo) {
        escolha.innerHTML = "O adversário escolhe um atributo... ";
        opcoes.innerHTML = "Ele escolheu <span>" + chaves[i] + "</span>";
        return chaves[i];
      }
    }

}*/

function jogar(){
    var divResultado = document.getElementById('resultado');
    var atributoSelecionado = opcaoEscolhida();
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Venceu!</p>';
        pontosJogador++;
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Perdeu!</p>';
        pontosMaquina++;
    }else{
        htmlResultado = '<p class="resultado-final">Empatou!</p>';
    }

    if (cartas.length == 0){

        alert("As cartas acabaram!");

        if(pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final">Você Venceu o jogo!</p>';
        } else if(pontosMaquina > pontosJogador){
            htmlResultado = '<p class="resultado-final">Você Perdeu, mais sorte na próxima!</p>';
        } else{
            htmlResultado = '<p class="resultado-final">Você empatou com a máquina!</p>';
        }

    } else{
        document.getElementById('btnProximaRodada').disabled = false;
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;

    exibirCartaMaquina();
    atualizarPlacar();
    gerenciarCartas();
}

function proximaRodada(){
  
    var limparCartas = document.getElementById('cartas');
    var limparResultado = document.getElementById('resultado');
    //contadorRodadas++;

    limparCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class=carta></div>`;
    limparResultado.innerHTML = "";
    //escolha.innerHTML = "";

    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnProximaRodada').disabled = true;
}