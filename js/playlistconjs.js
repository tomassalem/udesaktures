//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var playlistId = objetoQuery.get('id');








fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + playlistId)
.then(function(response){
    return response.json()
})
.then(function(data){
    
}).catch(function(error){
    console.error(error)
})
