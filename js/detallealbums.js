    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);
    //ahora si obtengo el id del album
    var detalleId = objetoQuery.get('id');        
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+detalleId)
        
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(datos){
            console.log (datos)
            let albums = datos
            let albumsContenedor = document.querySelector ('.grid-container');
                albumsContenedor.innerHTML =  
                `  
                <img class="imagen" src="${albums.cover_big}">
                <h1 class="h1">${albums.title}</h1>
                <a href="BadBunny.html?id=${albums.artist.id}" class="editarcolor" >${albums.artist.name}</a>
                <h2> Publicado el ${albums.release_date}</h2> 
                
                `
            let canciones=albums.tracks.data    
            let cancionContenedor = document.querySelector ('.juanca');
            for (const cancion of canciones) {
                cancionContenedor.innerHTML +=
                `
                <div>
                ${cancion.title}
                </div>
                
                `  
            }   
            
            
        })