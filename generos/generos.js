window.addEventListener ('load', function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre") // url para Géneros
    .then(function(response) {
      return response.json()
    })
    
    .then(
       function(information) {
      let Geneross = information.data; 
      console.log( information);
    
      for (let index = 0; index < 28; index++) {
        const Generos = Geneross [index];
 
        let FotoDelGenero = Generos.picture
        let NombreDelGenero = Generos.name
 
          console.log(FotoDelGenero)

        let NuevosGeneros = '<div><h2><a class="HiperDeGeneros" href="../albumes/detail.html">' + NombreDelGenero + '</a></h2><img class="fotogeneros" src= ' + FotoDelGenero +'alt=""></div>'
 
        document.querySelector ("div.generos").innerHTML += NuevosGeneros
        }
    })

    })