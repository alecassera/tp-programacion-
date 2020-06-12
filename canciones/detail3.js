window.addEventListener("load", function(){

    let queryString = new URLSearchParams (location.search);
    let idCanciones = queryString.get("idCanciones");
 
 fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idCanciones) 

    .then(
        function(respuesta){
              return respuesta.json();
            }
        )

    .then(
        function(informacion) {

            let canciones = informacion
            console.log(canciones)
        
            let nombrecancion = canciones.title
            console.log(nombrecancion)

            let imagen = canciones.artist.picture_big
            console.log(imagen)

            let nombreartista = canciones.artist.name
            console.log(nombreartista)

            let nombrealbum = canciones.album.title
            console.log(nombrealbum)

            let duracion = canciones.duration
            console.log(duracion)

            let cancionesHTML = `
            <section>
                <img class="imagen" src= "`+ imagen + `"> 
            </section>
            <article>
            <ul class="info">
                <li>
                <p class="info">`+ "Canción:" + "  " + nombrecancion + `</p>
                </li>
                <li>
                <p class="info">`+ "Artista:" + "  " + nombreartista + `</p>
                </li><li>
                <p class="info">`+ "Album:" + "  " + nombrealbum + `</p>
                </li>
                <li>
                <p class="info">`+ "Duración:" + "  " + (duracion/60).toFixed(2) + " " + "minutos" + `</p>
                </li>
            </ul>
            </article>
                        `
            document.querySelector(".topcanciones").innerHTML += cancionesHTML
     
     })
}) 