//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var resultado = objetoQuery.get('Buscador');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+resultado)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)

        let contador = 0

        let artistasgeneros= datos.data
        let contenedorArtistas= document.querySelector ('.contenedor-artistas')

        for (const artista of artistasgeneros) {
            contenedorArtistas.innerHTML+=  
            `
    <div>
            <a href="detalletracks.html?id=${artista.id}">
            <img class="imagen" src="${artista.album.cover_big}" alt=""></a>
            <h4>${artista.title}</h4>
            </div>
            `
            contador = contador + 1

            if(contador == 6){
                break;
            };

        } 


    })
        .catch(function(error){
            console.error(error);
        })