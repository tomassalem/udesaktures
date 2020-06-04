//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var generoId = objetoQuery.get('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/artists")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let artistasgeneros= datos.data
        let contenedorArtistas= document.querySelector ('.contenedor-artistas')

        for (const artista of artistasgeneros) {
            contenedorArtistas.innerHTML+=  
            `
    <div>
            <a href="BadBunny.html">
            <img class="imagen" src="${artista.picture_big}" alt=""></a>
            <h4>${artista.name}</h4>
            </div>
            `
            
        } 


    })
        .catch(function(error){
            console.error(error);
        })