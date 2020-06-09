window.addEventListener("load", function() {

  let queryString = new URLSearchParams(location.search);

  let idArtistas = queryString.get("idArtista");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtistas)
     
  .then(
    function(respuesta){
        return respuesta.json();
  })

  .then(
    function(informacion) {
        
      let artistas = informacion          
 
     console.log(artistas)


      let nombre = artistas.name          

      console.log(nombre)
      

        
    
    
  })
  
})
















































