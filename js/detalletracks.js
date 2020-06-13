    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);
    //ahora si obtengo el id del album
    var detalleId = objetoQuery.get('id');
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+detalleId)
        
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(datos){
            console.log (datos)
            let tracks = datos
            let tracksContenedor = document.querySelector ('.grid-container');
                tracksContenedor.innerHTML =  
                ` <div class='primero'>
                <img class="imagen" src="${tracks.album.cover_big}">
                
                </div>
                <div  class='nombres'>
                <div>
                <h1>Canción</h1>
                </div>
                <div><h1>Álbum</h2></div>
                <div><h1>Cantante</h3> </div>
                <div><h1>Preview</h4></div>
                <div><h1></h1></div>
                </div>
                <div  class='audio'>
                <h2>${tracks.title}</h1>
                <h2>${tracks.album.title}</h2>
                <h2> ${tracks.artist.name}</h3> 
                <audio src="${tracks.preview}"controls></audio>
                <button id='boton'>Agregar a playlist</button>
                </div>
                `
            
        })