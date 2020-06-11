window.addEventListener("load", function(){

    let queryString = new URLSearchParams (location.search);
    let idCanciones = queryString.get("idCanciones");
 
 fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556" + idTracks)

    .then(
        function(respuesta){
              return respuesta.json();
            }
        )

    .then(
        function(informacion) {
            let canciones = informacion
            let nombre = canciones.name

            console.log(canciones)
            console.log(nombre)
            }
        )
})