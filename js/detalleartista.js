    //obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);
//ahora si obtengo el id del album
var detalleId = objetoQuery.get('id');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+detalleId)
    

    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)


        let artistas = datos
        let artistasContenedor = document.querySelector ('#detalleart');
            artistasContenedor.innerHTML +=  
            `    <div>
            <img class="fotoartista" src="${artistas.picture_big}" alt="">
        </div> 
            <h1>${artistas.name}</h1>
            <h2>Seguidores: ${artistas.nb_fan} - Número de álbumes: ${artistas.nb_album}</h2>
        `

    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+detalleId+'/albums')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let contador = 0
        let albumsdetalle = datos.data
        let albumsContenedor = document.querySelector ('#detalleartistajs');
        for (const albumslista of albumsdetalle){
            albumsContenedor.innerHTML +=  
            `
                    <div>
                        <img class="imagen" src="${albumslista.cover_big}" alt="">
                        <h4>${albumslista.title} <br>${albumslista.fans} Likes</h4>
                    </div>`
                    contador = contador + 1

        
                    if(contador == 6){
                        break;
                    };
        }


    })