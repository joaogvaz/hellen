let btn = document.querySelector('#btn');
btn.style.background = 'blue';
let estaQuebrado = false;
let contaCliques = 0;

btn.addEventListener('mouseover', e => {
    if(!estaQuebrado) 
    btn.style.background ='green';
    
});

btn.addEventListener('mouseout', e => {
    if(!estaQuebrado)
    btn.style.background ='blue';
});

btn.addEventListener('click', e => {
    contaCliques++;
    if(contaCliques >= 10){
    btn.style.background ='red';
    btn.innerHTML='Quebrei';
    estaQuebrado = true;
    }
});