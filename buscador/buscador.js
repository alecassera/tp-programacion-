window.addEventListener ('load', function(){

let queryString = new URLSearchParams(location.search)

let loBuscado = queryString.get("buscador");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado)
.then(
    function(respuesta) {
        return respuesta.json();            
    }
)
.then(
    function(informacion) {
        let CancionesBuscadas = informacion.data;

        if (CancionesBuscadas.length == 0) {
            alert("No hay resultados");
        }

        for (let index = 0; index < CancionesBuscadas.length; index++) {
            const cadaCancion = CancionesBuscadas[index];

            let img = cadaCancion.album.cover;
            let title = cadaCancion.title;
            let id = cadaCancion.id;

            let htmlCancionesBuscadas = `
                <li class="CancionesBusacadass">
                    <a href="resultados.html?buscador=` + id + `">
                        <h2>` + title + `</h2>
                    </a>
                    <img src="` + img + `">
                </li>
            `
            
            document.querySelector(".resultados").innerHTML += htmlCancionesBuscadas
        }
        
        
    }
)

})