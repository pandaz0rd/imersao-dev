var thiago = {nome:"Thiago", vitorias:0, empates:0, derrotas:0, pontos:0};
var erika = {nome:"Erika", vitorias:0, empates:0, derrotas:0, pontos:0};
var listaJogadores = [thiago, erika];


function exibirListaJogadores(jogadores){
    var html = "";
    
    for(var i=0; i < jogadores.length; i++){
        
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores').innerHTML = html;
    
    }

    function calcularPontos(jogador){
        var pontos = (jogador.vitorias * 3) + jogador.empates;
        return pontos;
    }
    exibirListaJogadores(listaJogadores);

    function adicionarVitoria(i){
        var jogador = listaJogadores[i];
        jogador.vitorias++;
        jogador.pontos = calcularPontos(jogador);
        exibirListaJogadores(listaJogadores);
    }

    function adicionarEmpate(i){
        var jogador = listaJogadores[i];
        jogador.empates++;
        jogador.pontos = calcularPontos(jogador);
        exibirListaJogadores(listaJogadores);
    }

    function adicionarDerrota(i){
        var jogador = listaJogadores[i];
        jogador.derrotas++;
        exibirListaJogadores(listaJogadores);
    }
  