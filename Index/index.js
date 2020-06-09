window.addEventListener ('load', function(){


  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart") // url para Carrousel
  .then(function(response) {
    return response.json()
  })
  
  .then(
     function(information) {
    let ArtistasCorrousel = information.artists.data;
    console.log( ArtistasCorrousel );
  
   for (let index = 0; index < 8; index++) {
       const DecoArtistas = ArtistasCorrousel[index];

       let Carrousel = DecoArtistas.picture

       let NuevoCarrousel = "<li><img height='350px' width='350px' src=" + Carrousel + "><div class='uk-position-center uk-panel'></div></li>"

       document.querySelector (".HOLA").innerHTML += NuevoCarrousel
   }

  })

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart") //url para top 5 artistas 

    .then(function(response) {
      return response.json()
    })

    .then(
        function(information) {
      let Artistas = information.artists.data;
      console.log( Artistas );

        for (let index = 0; index < 1; index++) {
            const TopArtistas = Artistas[index];

            let Foto = TopArtistas.picture

            let NuevaFotoArtistas = "<img class='artista' src=" + Foto + "></li>"

            document.querySelector ("div.fotoBB").innerHTML = NuevaFotoArtistas + document.querySelector ("div.fotoBB").innerHTML
            document.querySelector ("div.fotoBB2").innerHTML = NuevaFotoArtistas + document.querySelector ("div.fotoBB2").innerHTML
        }

        for (let index = 0; index < 5 ; index++) {
            const TopArtistas = Artistas [index];
            
            let NombresArtistas = TopArtistas.name
            
            let id = TopArtistas.id

            let NuevaListaArtistas = "<li><a href='../artistas/detail2.html?idArtista="+ id +"'>" + NombresArtistas +"</a></li>"
            
            document.querySelector ("ol.artistas").innerHTML += NuevaListaArtistas
            document.querySelector ("div.fotoBB2 ol.artistas").innerHTML += NuevaListaArtistas
          }

    })


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart") //url para top 5 albumes

    .then(function(response) {
      return response.json()
    })

    .then(
        function(information) {
      let Albumes = information.albums.data;
      console.log( Albumes );

        for (let index = 0; index < 1; index++) {
            const TopAlbumes = Albumes[index];

            let FotoAlbum = TopAlbumes.cover

            let NuevaFotoAlbum = "<img class='album' src=" + FotoAlbum + "></li>"

            document.querySelector ("div.albumes").innerHTML = NuevaFotoAlbum + document.querySelector ("div.albumes").innerHTML
            document.querySelector ("div.albumes2").innerHTML = NuevaFotoAlbum + document.querySelector ("div.albumes2").innerHTML
        }

        for (let index = 0; index < 5 ; index++) {
            const TopAlbumes = Albumes [index];
            
            let NombresAlbumes = TopAlbumes.title
            
            let NuevaListaAlbumes = "<li><a href='../albumes/detail.html'>" + NombresAlbumes +"</a></li>"
  
            document.querySelector ("ol.album").innerHTML += NuevaListaAlbumes
            document.querySelector ("div.albumes2 ol.album").innerHTML += NuevaListaAlbumes
          }
    

    })

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart") //url para top 5 canciones
    .then(function(response) {
      return response.json()
    })
    .then(
        function(information) {
      let Canciones = information.tracks.data;
      console.log( Canciones );

        for (let index = 0; index < 1; index++) {
            const TopCanciones = Canciones [index];

            let FotoCanciones = TopCanciones.album.cover

            let NuevaFotoCanciones = "<img class='otro' src=" + FotoCanciones + "></li>"

            document.querySelector ("div.otro").innerHTML = NuevaFotoCanciones + document.querySelector ("div.otro").innerHTML
            document.querySelector ("div.otro2").innerHTML = NuevaFotoCanciones + document.querySelector ("div.otro2").innerHTML
        }

        for (let index = 0; index < 5 ; index++) {
            const TopCanciones = Canciones [index];
            
            let NombresCanciones = TopCanciones.title
            
            let NuevaListaCanciones = "<li><a href='../canciones/detail3.html'>" + NombresCanciones +"</a></li>"
  
            document.querySelector ("ol.listadeotros").innerHTML += NuevaListaCanciones
            document.querySelector ("div.otro2 ol.listadeotros").innerHTML += NuevaListaCanciones
          }

    })

})