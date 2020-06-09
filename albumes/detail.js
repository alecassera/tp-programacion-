window.addEventListener("load", function() {

    fetch( " https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")
         
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





    


