window.addEventListener("load", function() {


  let queryString = new URLSearchParams(location.search);

  let idArtistas = queryString.get("idAlbum");


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idAlbum)
         
      .then(
        function(respuesta){
            return respuesta.json();
      })
    
      .then(
        function(informacion) {
           console.log(informacion)
          
          `
            
    
           `
        
      })
      
    })





    


