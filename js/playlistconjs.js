let playlistjson = JSON.parse(window.localStorage.getItem("playlist"))
let playlistContenedor = document.querySelector ('.grid-container');

                for (const tracks of playlistjson) {
                    playlistContenedor.innerHTML+=
                    `  
                    <div class='primero'>
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
                    </div>
                    `    
                }
                let vaciar=document.querySelector('.vaciar')
                vaciar.onclick= function(){
                    window.localStorage.clear('playlist')
                }