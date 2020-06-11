window.addEventListener('load', function() {

if(localStorage.getItem(cancionesFavoritas) != null) {

  let cancionesFavoritas = localStorage.getItem("cancionesFavoritas").split(",")
}
for (let i = 0 ; i < cancionesFavoritas.length; i++) {
  this.fetch("https://cors-anywhere.herokuapp.com/ https://api.deezer.com/")
  .then(

    function(respuesta) {
      return respuesta.json();
    }
  )
.then(
  function(resultado) {
    let laCancion = resultado.data;
    let img = laCancion.images.original.url;
    let title = laCancion.title;
    let id = laCancion.id;
    let htmlNuevaCancion = ''

  
  }
)
}
else {
  alert("Perdón, no encontramos canciones favoritas")
}


})