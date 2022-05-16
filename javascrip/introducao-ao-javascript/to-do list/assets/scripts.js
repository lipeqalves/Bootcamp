//let tarefa = document.querySelector("#task-input")
let adicionar = document.querySelector("#submit")
//let entrada  = document.querySelector("#task-input");
let saida    = document.querySelector("#tasks");

adicionar.addEventListener("click",function(e){
   e.preventDefault();

    let item = document.querySelector("#task-input").value;
    console.log(item);
    saida.innerHTML = item;

});