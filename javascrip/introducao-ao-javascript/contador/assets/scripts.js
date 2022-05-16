let subtrair = document.querySelector("#subtrair");
let adicionar = document.querySelector("#adicionar");
let saida = document.querySelector("#currentNumber");
let cont = 0;

subtrair.addEventListener('click',function(){
   // e.preventDefault();
    cont = cont - 1;
    saida.innerHTML = cont;
});

adicionar.addEventListener('click',function(){
    //e.preventDefault();
    cont = cont + 1;
    saida.innerHTML = cont;
});

