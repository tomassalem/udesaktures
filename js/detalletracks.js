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
                `  
                <img class="imagen" src="${tracks.album.cover_big}">
                <h1 class="h1">${tracks.title}</h1>
                <h2> Publicado el ${tracks.release_date}</h2> 
                <audio src="${tracks.preview}" controls></audio>
                
                `
            
        })