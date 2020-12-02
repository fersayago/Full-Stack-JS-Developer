$(document).ready(() => {
    //Como tengo un boton solo puedo referirme a el
    console.log("se cargo la pagina")
    $("button").click(()=>{
        //let tarea = document.querySelector("button")[0].value
        let tarea = $("input").val();
        
        if (tarea.length>0){
            //var li = document.CreateElement("li")
            //li.innerHTML = ...
            //document.querySelector("ul")[0].appendChild(li)
            $("ul").append(`<li class="list-group-item">${tarea}</li>`);

            //document.querySelector("button")[0].value= '';
            $("input").val('');
        }
    })
})