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

    let fotoAlbum = topAlbum.cover
          console.log (fotoAlbum) 
          
   let nombreAlbum = topAlbum.title
           console.log (nombreAlbum)

   let nombreArtista = informacion.artist.name
          console.log (nombreArtista)   
          
          
        let albumHTML =  `
  <section class="playlist">
            <img src="` + fotoAlbum + `">
  </section>
  <article class="album"> 
         <ul class="album">
               <li> ` + nombreAlbum + `</li> 
               <li> ` + nombreArtista + `</li>
               <li></li>
               <li></li>
         </ul>
  </article>
     `
     document.querySelector(".topalbum").innerHTML += albumHTML
        
      })
      
    })





    


