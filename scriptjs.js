const teclas = document.querySelectorAll(".oitava > div")

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
}

teclas.forEach(function(tecla){
    //Evento apertar mouse
    tecla.onmousedown = function(){
       tecla.classList.add("selecionada")
    }

    
    //Evento desapertar mouse
    tecla.onmouseup = () => desmarcar(tecla);
    //Evento sair com mouse do componente
    tecla.onmouseleave = () => desmarcar(tecla);
    
})