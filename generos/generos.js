window.addEventListener ('load', function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre") // url para Géneros
    .then(function(response) {
      return response.json()
    })
    
    .then(
       function(information) {
      let Geneross = information.data; 
      console.log( information);
    
      for (let index = 1; index < 28; index++) {
        const Generos = Geneross [index];
 
        let FotoDelGenero = Generos.picture_xl
        let NombreDelGenero = Generos.name
 
          console.log(FotoDelGenero)

        let GenerosDetallePrueba = Generos.id

        let NuevosGeneros = '<div><h2><a class="HiperDeGeneros" href="generosDetalle.html?idGeneros='+ GenerosDetallePrueba +'">' + NombreDelGenero + '</a></h2><img class="fotogeneros" src="' + FotoDelGenero +'" alt=""></div>'
 
        document.querySelector ("div.generos").innerHTML += NuevosGeneros
        }
    })

    })