window.addEventListener('load', function() {

fetch ("") //url

.then (function (response){
    return response.json()
})

.then(function(information){
    let playlist = information.data;
    console.log (playlist);

    let 
})