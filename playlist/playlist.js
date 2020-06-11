window.addEventListener('load', function() {

if(localStorage.getItem(cancionesFavoritas) != null) {

  let cancionesFavoritas = localStorage.getItem("cancionesFavoritas").split(",")
}
for (let i = 0 ; i < cancionesFavoritas.length; i)

.then 
    (function (response){
      return response.json()
    }
)

.then(
    function(resultado){
         let playlist = resultado.data;

         console.log (playlist);
 
        let 

 
iframe = "<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=954848452&app_id=1" width="700" height="240"></iframe>"

})