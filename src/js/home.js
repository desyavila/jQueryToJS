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


// LLAMANO LA API VANILLA JS

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
	})

















