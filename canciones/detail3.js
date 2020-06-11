window.addEventListener("load", function(){

    let queryString = new URLSearchParams (location.search);
    let idCanciones = queryString.get("idTracks");
 
 fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556" + idTracks)

    .then(
        function(respuesta){
              return respuesta.json();
            }
        )

    .then(
        function(informacion) {
            let tracks = informacion
            console.log(tracks)
        
            let nombre = canciones.name
            console.log(nombre)
            }
        )
}) 