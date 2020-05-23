window.addEventListener ('load', function(){


    fetch("") //url

    .then(function(response) {
      return response.json()
    })

    .then(function(information) {
      let Home = information.data;
      console.log( Home );
     
     let nombre = MiPag.title; // fotos?
     let url = MiPag.image_url; //
        
     document.querySelector ("").innerHTML = nombre;
     document.querySelector ().src = url

    })








})