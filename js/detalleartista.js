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
        let artistasContenedor = document.querySelector ('#detalleartistajs');
            artistasContenedor.innerHTML +=  
            `    
            <h1>${datos.name}</h1>
            <h2>Seguidores: ${datos.nb_fan} - Número de álbumes: ${datos.nb_album}</h2>
        <div>
            <img class="fotoartista" src="${datos.picture_big}" alt="">
        </div>
        

            `
            
        


    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+detalleId+'/albums')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let albumsdetalle = datos.data
        let albumsContenedor = document.querySelector ('#detalleartistajs');
        for (const albumslista of albumsdetalle){
            albumsContenedor.innerHTML +=  
            `
            <div class="flex">
                
                <div class="grid-container">
                    <div>
                        <img class="imagen" src="${albumslista.cover_big}" alt="">
                        <h4>${albumslista.title} <br>${albumslista.fans} Fans</h4>
                    </div>
                </div>
            `
        }
        


    })