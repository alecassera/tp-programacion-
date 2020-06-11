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

      let imagen = artistas.picture
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

     let nombreTArtistas = tArtistas.tittle 
           console.log (nombreTArtistas)

         let tArtistasHTML =   `
          <section>
         <li>
         <p>` + nombreTArtistas + `<p>
        </li>
        </section>
               `
           
         document.querySelector(".trackArtist").innerHTML += tArtistasHTML

        }


      } )


        let artistasHTML = `
        <section class= "playlist">
                    <img src="` + imagen + `">
        </section>
        <article>
        <ol>
            <li>
                     <p>` + nombre + `<p>
           </li>
           <li>
                  <p>  `+ fans + ` </p>
           </li>
           </ol>
        <article/>
                   `
      document.querySelector(".topplaylist").innerHTML += artistasHTML
    
  })
  
})
















































