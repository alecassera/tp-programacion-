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

            let idVinculoartista = canciones.artist.id 
            console.log (idVinculoartista)
        
            let idVinculoalbum = canciones.album.id 
            console.log (idVinculoalbum)

            let cancionesHTML = `
            <section>
                <h1 class= "cancion">`+ nombrecancion + `</h1> 
                <img class="imagen" src= "`+ imagen + `"> 
                <p class="button"> <button class= "botonrep">Reproducir canción   <i class="far fa-play-circle"></i></button></p>
                <iframe class="reproducir" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=400&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=`+idCanciones+`&app_id=1" width="400" height="90"></iframe>
            </section>

            <article>
                <ul class= "info"> Artista: <a class= "vinculo" href="../artistas/detail2.html?idArtista=`+ idVinculoartista + `">` + nombreartista + `</a> </ul>
                <ul class= "info"> Album: <a class= "vinculo" href="../albumes/detail.html?idAlbum=`+ idVinculoalbum + `">` + nombrealbum+ `</a> </ul>
                <ul class="info">`+ "Duración:" + "  " + (duracion/60).toFixed(2) + " " + "minutos" + `</ul>
            
            </article>
                        `
            document.querySelector(".topcanciones").innerHTML += cancionesHTML

           
            document.querySelector(".botonrep").addEventListener ("click", function() {
          
            document.querySelector(".reproducir").style.display = "block"
            
     })
     
        })
     
        
})