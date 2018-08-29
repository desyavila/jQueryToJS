console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo 3');
  }, 3000)
})

// getUser
//   .then(function() {
//     console.log('todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

Promise.race([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message);
})
.catch(function(message) {
  console.log(message)
})


// ******************* CONECTANDO A LA API **************** //

// LLAMANDO LA API CON JQUERY
/*
$.ajax("url", {
  method: "GET", //POST, PUT, DELETE
  success: function(data) {
    //se ejecuta cuando todo sale bien
    //data: lo que devuelve el api
  },
  error: function(error) {
    //se ejecuta cuando hay un error
    //error: mensaje de error del api
  }
})
*/


/*
$.ajax('https://randomuser.me/api/dasasdde3', {
	method: "GET",
	success: function(data) {
		console.log(data)
	},
	error: function (error) {
		console.log(error)
	}

})
*/


// LLAMANDO LA API VANILLA JS

fetch('https://randomuser.me/api/')
	.then(function(response){
		console.log(response)
		return response.json()
	})
	.then(function (user) {
	  console.log('user', user.results[0].name.first)
	})
	.catch(function(){
		console.log('algo fallo')
	});



    // OBTENIENDO DATA DE UNA API CON ASYNC/AWAIT

   //  (async function load(){
   //
   //
   //    const response = await fetch('https://yts.am/api/v2/list_movies.json?genre=action');
   //    const data = await response.json()
   //    console.log(data);
   //
   // })()



   	// DECLARANDO UNA FUNCIÓN ASINCRONA ()

   (async function load(){
   		//await
   	 async function getData(url){
           const response = await fetch(url);
           const data = await response.json()
           return data;
   	}

       // METODO PROMISE
       // let animationList;
       // getData('https://yts.am/api/v2/list_movies.json?genre=animation')
       //     .then(function (data){
       //         console.log('ANIMATION', data);
       //         animationList = data;
       //     })


       // METODO AWAIT
       const thrillerList = await getData('https://yts.am/api/v2/list_movies.json?genre=thriller');
       const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
       const scifiList = await getData('https://yts.am/api/v2/list_movies.json?genre=sci-fi');
       console.log('THRILLER', thrillerList);
       console.log('SCIFI', scifiList);
       console.log('ANIMATION', animationList);

       // SELECCIONAMOS LOS CONTAINER DONDE VAMOS A IMPRIMIR LOS DIFERENTE GENEROS

       const $thrillerContainer = document.getElementById('thriller')
       const $animationContainer = document.getElementById('animation')
       const $sciFiContainer = document.getElementById('sciFi')

       function movieItemTemplate (movie){
           return (
               `<div class="primaryPlaylistItem">
               <div class="primaryPlaylistItem-image">
               <img src="${movie.medium_cover_image}" alt="">
               </div>
               <h4 class="primaryPlaylistItem-title">
                   ${movie.title}
               </h4>
               <h6>${movie.genres} </h6>
               <h4> rating: ${movie.rating} </h4>
               </div>`
           )
       }

       function clickMovie(movieItem){
           console.log('movieItem', movieItem);
           movieItem.addEventListener('click', function() {
                alert( 'clicked');
            })
       }

       // CREAMOS UNA FUNCION QUE IMPRIMA UNA LISTA DE PELICULA

       function printMovieList ( movieList, $container) {
           // borramos la img loader
           //$container.querySelector('img').remove() // o
           $container.children[0].remove()
           movieList.forEach((movie) => {
               const HTMLString = movieItemTemplate(movie)
               $container.innerHTML += HTMLString;

               clickMovie(HTMLString);
               //console.log(HTMLString);
           })
       }

       // // // ITERAMOS SOBRE EL OBJETO MOVIE  POR CADA GENERO
       // scifiList.data.movies.forEach((movie)=> {
       //     const HTMLString = movieItemTemplate(movie)
       //     $sciFiContainer.innerHTML = HTMLString;
           //console.log(HTMLString);
       //})
       // // ITERAMOS SOBRE EL OBJETO MOVIE POR CADA GENERO
       // thrillerList.data.movies.forEach((movie)=> {
       //     const HTMLString = movieItemTemplate(movie)
       //     $thrillerContainer.innerHTML = HTMLString;
           //console.log(HTMLString);
      // })
       // // ITERAMOS SOBRE EL OBJETO MOVIE POR CADA GENERO
       // animationList.data.movies.forEach((movie)=> {
       //     const HTMLString = movieItemTemplate(movie)
       //     $animationContainer.innerHTML = HTMLString;
       //     console.log(HTMLString);
       // })



       printMovieList(thrillerList.data.movies, $thrillerContainer)
       printMovieList(scifiList.data.movies, $sciFiContainer)
       printMovieList(animationList.data.movies, $animationContainer)

       // FORMULARIO

       const $featContainer = document.getElementById('featuring')
       const $form = document.getElementById('form')
       $form.addEventListener('submit', (event) => {
           event.preventDefault();
       })
       const $home = document.getElementById('home')

       // SELECCIONAMOS EL MODAL DONDE VAMOS A IMPRIMIR EL DETALLE DE LA PELICULA

       const $modal = document.getElementById('modal')
       const $overlay = document.getElementById('overlay')
       const $hideModal = document.getElementById('hide-modal')
       const $modalTitle = $modal.querySelector('h1')
       const $modalImage = $modal.querySelector('img')
       const $modalDescrip = $modal.querySelector('p')



   	})()
