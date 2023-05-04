let paragrafo = document.querySelector('#p1');
let btn = document.querySelector('#btn');

btn.addEventListener("click", mudaVermelho);
btn.addEventListener("mouseover", mudaVerde);

function mudaVermelho(){
    paragrafo.style.background='red';
}

function mudaVerde(){
    paragrafo.style.background='green';
}