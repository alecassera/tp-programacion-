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

        let FotoDelGenero = Geneross.picture
        console.log(Geneross.picture)
        let NombreDelGenero = Geneross.name
        let NuevosGeneros =  '<div class="Detalle"><img class="FotoDetalleGeneros" src="' + FotoDelGenero + '" alt=""></div><div class="Detalle"><p class="NombreDelGenero">' + NombreDelGenero + '</p></div>'
        document.querySelector (".GenerosDetalle").innerHTML += NuevosGeneros
       

    })

})
