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
        
            let nombre = canciones.title
            console.log(nombre)

            let imagen = canciones.picture
            }
        )
}) 