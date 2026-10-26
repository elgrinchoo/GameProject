const objeto = document.querySelector('#objeto');
const ball = document.querySelector('#ball');
const contador = document.querySelector('#contador-tiempo');
const audio = document.querySelector('audio');

audio.volume = 0.2

let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;
let textoSegundos = `${contadorSegundos}`;
let textoMinutos = `${contadorMinutos}`;
let textoHoras = `${contadorHoras}`;


const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;
let incrementoX = 0;
let incrementoY = 0;
let cuadradoPosicionRight = objeto.offsetLeft + objeto.offsetWidth;
let cuadradoPosicionLeft = objeto.offsetLeft;
let cuadradoPosicionBottom = objeto.offsetTop + objeto.offsetHeight;
let cuadradoPosicionTop = objeto.offsetTop;
let pelotaPosicionRight = ball.offsetLeft + ball.offsetWidth;
let pelotaPosicionLeft = ball.offsetLeft;
let pelotaPosicionBottom = ball.offsetTop + ball.offsetHeight;
let pelotaPosicionTop = ball.offsetTop;

const teclas = {
    w: false,
    a: false,
    s: false,
    d: false
}

document.addEventListener('keydown', (evento) => {
    if(evento.key === 'w'){
        teclas.w = true
    } else if(evento.key === 'a'){
        teclas.a = true
    } else if(evento.key === 's'){
        teclas.s = true
    } else if(evento.key === 'd'){
        teclas.d = true
    }
})

document.addEventListener('keyup', (evento) => {
    if(evento.key === 'w'){
        teclas.w = false
    } else if(evento.key === 'a'){
        teclas.a = false
    } else if(evento.key === 's'){
        teclas.s = false
    } else if(evento.key === 'd'){
        teclas.d = false
    }
})

setInterval(() => {
    if(teclas.w){
    objeto.style.top = `${incrementoY = incrementoY - 5}px`;
    }
    if(teclas.a){
    objeto.style.left = `${incrementoX = incrementoX - 5}px`;
    }
    if(teclas.d){
    objeto.style.left = `${incrementoX = incrementoX + 5}px`;
    }
    if(teclas.s){
    objeto.style.top  = `${incrementoY = incrementoY + 5}px`;
    }

    cuadradoPosicionRight = objeto.offsetLeft + objeto.offsetWidth;
    cuadradoPosicionLeft = objeto.offsetLeft;
    cuadradoPosicionBottom = objeto.offsetTop + objeto.offsetHeight;
    cuadradoPosicionTop = objeto.offsetTop;
    pelotaPosicionRight = ball.offsetLeft + ball.offsetWidth;
    pelotaPosicionLeft = ball.offsetLeft;
    pelotaPosicionBottom = ball.offsetTop + ball.offsetHeight;
    pelotaPosicionTop = ball.offsetTop;

    if(cuadradoPosicionRight > pelotaPosicionLeft && cuadradoPosicionLeft < pelotaPosicionRight && cuadradoPosicionTop < pelotaPosicionBottom && cuadradoPosicionBottom > pelotaPosicionTop){
    const randomHorizontal = Math.random() * (window.innerWidth - ballWidth);
    const randomVertical = Math.random() * (window.innerHeight - ballHeight);
    ball.style.left = `${randomHorizontal}px`;
    ball.style.top = `${randomVertical}px`;
}
}, 16)

function contadorTiempo(){
    contadorSegundos++
    if(contadorSegundos === 60){
        contadorSegundos = 0;
        contadorMinutos++
    }

    if(contadorMinutos === 60){
        contadorMinutos = 0;
        contadorHoras++
    }


    if(contadorSegundos < 10){
        textoSegundos = `0${contadorSegundos}`;
    } else {
        textoSegundos = `${contadorSegundos}`;
    }
    
    if(contadorMinutos < 10){
        textoMinutos = `0${contadorMinutos}`;
    } else {
        textoMinutos = `${contadorMinutos}`;
    }

    if(contadorHoras < 10){
        textoHoras = `0${contadorHoras}`;
    } else {
        textoHoras = `${contadorHoras}`;
    }

    contador.textContent = `${textoHoras}:${textoMinutos}:${textoSegundos}`;
}

setInterval(contadorTiempo, 1000);
