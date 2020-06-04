fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let albums = datos.albums.data;
        console.log(albums)
        let albumsContenedor = document.querySelector('#albumesjs');
        for (const albumlista of albums){
            albumsContenedor.innerHTML += ` <div>
            <a href="mantra.html">
            <img class="imagen" src="${albumlista.cover_xl}" alt=""></a>
            <h4>${albumlista.title}</h4>
        </div>`
            }
        let artistas = datos.artists.data;
        let artistasContenedor = document.querySelector ('#artistasjs');
        for (const artistaslista of artistas) {
            artistasContenedor.innerHTML += `<div>
            <a href="BadBunny.html">
            <img class="imagen" src="${artistaslista.picture_xl}" alt=""></a>
            <h4>${artistaslista.name}</h4>
            </div>`
            
        }
        let tracks = datos.tracks.data;
        let tracksContenedor = document.querySelector ('#tracksjs');
        for (const trackslista of tracks) {
            tracksContenedor.innerHTML += `<div>
            <a href="dailymix.html">
            <img class="imagen" src="${trackslista.album.cover_big}" alt=""></a>
            <h4>${trackslista.title}</h4>
            </div>`
            
        }
    })
        .catch(function(error){
            console.error(error);
        })