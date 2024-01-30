const capNum = 10;
const autor = "Machado de Assis";
let capAtual = 1;
let tocando = false;

const nomeCap = document.getElementById("capitulo");
const nomeAutor = document.getElementById("nome-autor");

const botaoAnterior = document.getElementById("anterior");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");

const audioCapitulo = document.getElementById("audio-capitulo");

botaoAnterior.addEventListener("click", voltarFaixa);
botaoPlayPause.addEventListener("click", tocarPausar);
botaoProximo.addEventListener("click", passarFaixa);

function tocar() {
    tocando = true;
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausar() {
    tocando = false;
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarPausar() {
    if(tocando) {
        pausar();
    } else {
        tocar();
    }
}

function passarFaixa() {
    pausar();

    if(capAtual < capNum) capAtual++;
    else capAtual = 1;

    trocarNomeFaixa();
    audioCapitulo.src = "./Audios/dom-casmurro/" + capAtual + ".mp3"
}

function voltarFaixa() {
    pausar();

    if(capAtual > 1) capAtual--;
    else capAtual = capNum;

    trocarNomeFaixa();
    audioCapitulo.src = "./Audios/dom-casmurro/" + capAtual + ".mp3"
}

function trocarNomeFaixa() {
    nomeCap.innerText = "Capítulo " + capAtual;
    nomeAutor.innerText = "Autor - " + autor;
}
