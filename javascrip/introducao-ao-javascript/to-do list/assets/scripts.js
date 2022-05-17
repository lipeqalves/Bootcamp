
let adicionarItem = document.querySelector("#submit")
let item = document.querySelector("#task-input");


adicionarItem.addEventListener("click",function(e){
   e.preventDefault();
  
   let texto = document.createElement('p');
   let saida = document.querySelector("#tasks");
    //console.log(item);
    texto.innerText = item.value;
    saida.appendChild(texto);

item.value = "";
});
