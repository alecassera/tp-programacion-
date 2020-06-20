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

      let imagen = artistas.picture_big
           console.log(imagen)

      let fans = artistas.nb_fan
          console.log(fans)

      let tracklist = artistas.tracklist

      fetch("https://cors-anywhere.herokuapp.com/" + tracklist)

      .then(
        function(respuesta){
            return respuesta.json();
      })

      .then(
        
        function(respuestaCanciones)  {
          
         console.log(respuestaCanciones)

        let tracklistArtistas = respuestaCanciones.data 

        console.log(tracklistArtistas)

        for (let index = 0; index < 5 ; index++) {
          const tArtistas  = tracklistArtistas [index];

     let nombreTArtistas = tArtistas.title 
           console.log (nombreTArtistas)

           let hiperCanciones = tArtistas.id
           console.log(hiperCanciones)

         let tArtistasHTML =   `
        
          <section>
          <li>
         <p>  <a href="../canciones/detail3.html?idCanciones=`+ hiperCanciones+`"> ` + nombreTArtistas + `</a>  </p>
        </li>
        </section>
               `
           
         document.querySelector(".trackArtist").innerHTML += tArtistasHTML

        }


      } )


        let artistasHTML = `
        <h1 class= "titulo"> ARTISTAS </h1>
        <section class= "playlist">
        
                    <img class="imgArtista" src="` + imagen + `">
        </section>
        <article>
        <ol >
            <li>
                     <p class= "fans"> Nombre: ` + nombre + `<p>
           </li>
           <li>
                  <p class= "fans"> Numero de fans: `+ fans + ` </p>
           </li>
           </ol>

        <article/>
       <h3> Top 5 Tracks De `+ nombre +`</h3>
                   `
      document.querySelector(".topplaylist").innerHTML += artistasHTML


    
  })




  
})
















































