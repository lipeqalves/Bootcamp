
    const adicionarItem = document.querySelector("#submit")
    const item = document.querySelector("#task-input");
    const marcacao = document.getElementById("tasks");
    
adicionarItem.addEventListener("click", (e) =>{
    e.preventDefault();
    listas();
    item.value = "";
});

const listas = () =>{
    //let itemLista = document.createElement('li');
    //let lista = document.createElement("ul");
    let saida = document.querySelector("#tasks");
     
     //itemLista.innerText = item.value;
     //lista.appendChild(itemLista);

     //saida.appendChild(lista);
    // console.log(saida);
     
    let label = document.createElement('label');
    label.classList = "lista-Item";
    let checkbox = document.createElement('input');
     //label.setAttribute("for", id);
     checkbox.type = "checkbox";
     checkbox.name = "lista-Item";
     checkbox.value = item.value;
     //checkbox.className = 'checked';
     label.appendChild(checkbox);
     label.appendChild(document.createTextNode(item.value));
     saida.appendChild(label); 
     //console.log(checkbox.value)
     console.log(label);

}
/*
document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
});
*/
marcacao.addEventListener("change", (e) =>{
    e.preventDefault();
    let marcar = document.querySelector('.lista-marcar');
        marcar.classList.toggle('checked')
    //console.log(checkbox.value)
})

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