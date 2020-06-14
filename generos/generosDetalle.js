window.addEventListener ('load', function(){

    let queryString = new URLSearchParams(location.search);

    let GenerosDetallePrueba = queryString.get("idGeneros");

    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + GenerosDetallePrueba) 
    .then(function(response) {
      return response.json()
    })
    
    .then(
        function(information) {  
        let Geneross = information; 
        console.log(information);

        let FotoDelGenero = Geneross.picture_xl
        console.log(Geneross.picture)
        let NombreDelGenero = Geneross.name
        let NuevosGeneros =  '<div class="Detalle"><img class="FotoDetalleGeneros" src="' + FotoDelGenero + '" alt=""></div><div class="Detalle"><p class="NombreDelGenero">' + NombreDelGenero + '</p></div>'
        document.querySelector (".GenerosDetalle").innerHTML += NuevosGeneros
       

    })

    // Top 10 artistas para generos detalle 

    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + GenerosDetallePrueba + "/artists") 
    .then(function(response) {
      return response.json()
    })
    .then(
      function(resultado) {  
      console.log(resultado)
      for (let index = 0; index < 10; index++) {
        let nombreArtistas = resultado.data[index].name;
        let ID = resultado.data[index].id;
        
        let NuevoHtml = "<li><a class='Hipervinculo' href='../artistas/detail2.html?idArtista= " + ID + "'> " + nombreArtistas + "</a></li> "
        document.querySelector( ".ListadoArtistas" ). innerHTML += NuevoHtml
      }

      })
})
