fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let generos= datos.data
        let contenedorGeneros= document.querySelector ('.grid-container')

        for (const genero of generos) {
            contenedorGeneros.innerHTML+=  
            `
        <div>
            <a href="Mantra.html?id=${genero.id}"><img class="imagen" src="${genero.picture_big}"></a>
            <h4>${genero.name}</h4>
        </div>
            `
            
        } 


    })
        .catch(function(error){
            console.error(error);
        })