let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

        if(chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns,');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p' , mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else if(chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Que pena você errou!');
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else {
            exibirTextoNaTela('h1', 'Que pena você errou!');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();        
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
/*
// Aqui estou recebendo o conteúdo do 'h1'
let titulo = document.querySelector('h1').innerHTML;

// Aqui estou adicionando o conteúdo no 'p'
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = titulo;
*/