window.addEventListener("load", function() {
     
 let queryString = new URLSearchParams(location.search);

  let idAlbum = queryString.get("idAlbum");


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum)
         
      .then(
        function(respuesta){
            return respuesta.json();
      })
    
      .then(
        function(informacion) {
           console.log (informacion)

           topAlbum = informacion

    let fotoAlbum = topAlbum.cover_xl
          console.log (fotoAlbum) 
          
   let nombreAlbum = topAlbum.title
           console.log (nombreAlbum)

   let nombreArtista = informacion.artist.name
          console.log (nombreArtista)   

  let fechaLanzamiento = topAlbum.release_date
         console.log (fechaLanzamiento)
          
         let idHiperArtista = informacion.artist.id
         console.log (idHiperArtista)
          
        let albumHTML =  `
  <section class="playlist">
            <img class="album" src="` + fotoAlbum + `">
  </section>
  <article class="album"> 
         <ul class="album">
               <li>  <p class="albump"> Album: ` + nombreAlbum + `</p> 
               </li> 
               <li>  <p class="albump"> Artista: <a href="../artistas/detail2.html?idArtista=`+ idHiperArtista + `">` + nombreArtista + `</a>    </p>
               </li>
               <li>  <p class="fecha" > Fecha de lanzamiento: `+ fechaLanzamiento + `</p>
               </li>
               
         </ul>
  </article>
     `
     document.querySelector(".topalbum").innerHTML += albumHTML

      })
      
    })





    


