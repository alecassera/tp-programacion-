console.log(34)
window.addEventListener("load", function() {
 console.log (33)
fetch( "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")
     
  .then(
            function(respuesta) {
                return respuesta.json();
            }
        )

  .then(
         function(informacion) {
             let deezerArtistas = informacion.data;
                  console.log(informacion)
         }

  )



























  })
























