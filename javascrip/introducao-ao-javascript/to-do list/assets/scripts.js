
let adicionarItem = document.querySelector("#submit")
let item = document.querySelector("#task-input");


adicionarItem.addEventListener("click",function(e){
   e.preventDefault();
  
   let texto = document.createElement('p');
   let saida = document.querySelector("#tasks");
    
    texto.innerText = item.value;
    saida.appendChild(texto);
    console.log(saida);1

item.value = "";
});
/*function ChangeTextDecoration () {
    var anchor = document.getElementById ("myAnchor");
    var checkboxes = document.getElementsByName ("checkboxs");
    var decorValue = "";

    // Checks all checkbox state
    for (var i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
           decorValue += checkboxes[i].value + " ";
           console.log(anchor)
        }
    }

    // If none is checked all other checked out
    var noneCh = document.getElementsByName("nonecheck");
    if (noneCh[0].checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        decorValue = "none";
    }
    anchor.style.textDecoration = decorValue;
}
//style="text-decoration: line-through"*/