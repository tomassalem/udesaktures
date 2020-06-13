fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)

        let contador = 0

        let albums = datos.albums.data;
        console.log(albums)
        let albumsContenedor = document.querySelector('#albumesjs');
        for (const albumlista of albums){
            albumsContenedor.innerHTML += ` <div>
            <a href="detallealbum.html?id=${albumlista.id}">
            <img class="imagen" src="${albumlista.cover_xl}" alt=""></a>
            <h4>${albumlista.title}</h4>
        </div>`
        
        contador = contador + 1

        
        if(contador == 6){
            break;
        };
            }
         contador = 0

        let artistas = datos.artists.data;
        let artistasContenedor = document.querySelector ('#artistasjs');
        for (const artistaslista of artistas) {
            artistasContenedor.innerHTML += `<div>
            <a href="BadBunny.html?id=${artistaslista.id}">
            <img class="imagen" src="${artistaslista.picture_xl}" alt=""></a>
            <h4>${artistaslista.name}</h4>
            </div>`
            
            contador = contador + 1

        
        if(contador == 6){
            break;
        };
        }
        

        let tracks = datos.tracks.data;
        contador = 0

        let tracksContenedor = document.querySelector ('#tracksjs');
        for (const trackslista of tracks) {
            tracksContenedor.innerHTML += `<div>
            <a href="detalletracks.html?id=${trackslista.id}">
            <img class="imagen" src="${trackslista.album.cover_big}" alt=""></a>
            <h4>${trackslista.title}</h4>
            </div>`
            contador = contador + 1

            if(contador == 6){
                break;
            }; 
        }

    })
        .catch(function(error){
            console.error(error);
        })
        $(function(){
            $("#form").submit(function(e){
                // Create data object
                var data = {};
                data.name = $("#name").val();
                data.email = $("#email").val();
                data.comment = $("#comment").val();
                // The url of your server-side script that handles the post submission
                var url = "http://www.someurl.com/post_comment.php";
                $.POST(url, data)
                .done(function(response){
                    // This code executes when the server returns a response
                    // Do something with the response like adding the comment to the current list of comments
                    // Example (if your response is HTML, better would be a JSON string):
                    $("#comments").append(response);
                });
                e.preventDefault();
            });
        });

        $(document).ready(function() {
            $('button').click(function() {
                var comment = $('.commentBox').val();
                $('<li>').text(comment).prependTo('.comments');
                $('button').attr('disabled', 'true');
                $('.counter').text('140');
                $('.commentBox').val('');
            });
            
            $('.commentBox').keyup(function() {
                var commentLength = $(this).val().length;
                var charLeft =  140 - commentLength;
                $('.counter').text(charLeft);
                
                if (commentLength == 0) {
                    $('button').attr('disabled', 'true');
                }
                else if (commentLength > 140) {
                    $('button').attr('disabled', 'true');
                }
                else {
                    $('button').removeAttr('disabled', 'true');
                }
            });
            
            $('button').attr('disabled', 'true');
            
        });