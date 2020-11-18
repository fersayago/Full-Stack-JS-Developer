function llamarApi() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if ((this.readyState == 4) && (this.status == 200)){
            let res = JSON.parse(this.responseText);
            //TRAER TODAS LAS CITAS DE UNA
            /*for (let quote of res) {
                let item = document.createElement("li");
                item.innerHTML = quote.text;
                let lista = document.getElementById("listaCitas");
                lista.appendChild(item);
            }
            */

            //TRAER UNA QUOTE ALIATORIAMENTE
            let indice = Math.round(Math.random() * res.length);
            let item = document.createElement("li");
            let cita = res[indice];
            item.innerHTML = `<i>${cita.text}</i> - <b>${cita.author}</b> `;
            let lista = document.getElementById("listaCitas");
            lista.appendChild(item);
        }
    }
    xhr.open("GET", "https://type.fit/api/quotes");
    xhr.send();
}