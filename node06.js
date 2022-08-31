/*
	TRABAJANDO CON REQUEST
	======================

1.-  


*/

const server = require('http');
// Metodo on(): permite interaccionar gracias a los eventos de JS

server.createServer((req,res)=>{
	// Consultar método de la petición
	console.log('Método empleado en la solicitud: ' + req.method);
	// Conocer la ruta
	console.log('Ruta: ' + req.url);
	// Conocer las cabeceras
	console.log('Cabeceras: ' + JSON.stringify(req.headers));
	// Trabajamos con el objeto 'request', que es la solicitud
	// al que hemos abreviado como 'req'
	// Usamos el método on() y el evento data, que se trata
	// de un buffer de datos.
	// Como trabajamos con datos, debemos de almacenarlos
	let acumulator='';
	// Cuando manejamos datos trabajamos con un stream
	// que se gestiona por bloques, pues una parte del stream
	// es el chunk, es decir una porción de datos.
	// PARA PROBARLO HACE FALTA USAR POSTMAN
	// =====================================
	req.on('data',(chunk)=>{
		acumulator += chunk;
		console.log(acumulator);
	})
	// Cuando finaliza la transmisión de datos se ha de 
	// llamar al evento end para indicar el fin.
	req.on('end',()=>{
	})

	res.end('Todo ok')

}).listen(3000);

/*
RESUMEN TEÓRICO DE LO TRABJADO
==============================
Propiedades REQUEST:
- url
- headers
- method

Métodos REQUEST:
- on()

*/