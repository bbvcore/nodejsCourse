/*
REPASO DE LO VISTO
------------------

Vamos a repasar lo visto, además de profundizar en un pequeño
concepto, en la propiedad url de la solicitud.

Hasta ahora estabamos trabajando con las respuestas del servidor, 
pero ahora esta propiedad de la solicitud nos permite obtener la
URL desde donde se realiza la solicitud. Que nos devuelve la raíz
porque se ejecuta desde el raíz de nuestro servidor.

*/
const server = require('http');

server.createServer((req,res)=>{
	// HEADERS
	res.writeHead(200,{'Content-Type':'text/html'});
	// Leer la url de la solicitud
	res.write('URL de la solicitud: ' + req.url);
	// BODY
	// write escribe en el body
	res.write('<br>Server Runs Perfectly.');
	// Final respuesta, es obligatorio ejecutar este método
	// para finalizar correctamentela respuesta.
	// Puede llevar contenido.
	res.end('<br>Todo perfecto.');
}).listen(3000);

/*
PAQUETE/MÓDULO URL
-------------------

Existe un paquete URL con el que vamos a trabajar, ya que estamos
viendo la propiedad url del request, aprovechamos a ver este módulo relacionado.

*/
// 1.- CREACIÓN DE UNA URL CON 'NEW URL'
const url = require('url');
const url01 = new URL('http://borjabasventin.com/');
console.log('===============================================================================');
console.log('URL 01 creada: ' + url01);
console.log('===============================================================================');

// 1.1.- PROPIEDADES DE LA URL CREADA Y ACCESO A ALGUNAS DE ELLAS
// Editar algunas de las propiedades editando sus valores
url01.pathname = '/blog/sections/news';
url01.search = '?post=24';
url01.hash = '#postear';
console.log('Atributos URL 01: ');
console.log(url01);
console.log('===============================================================================');
console.log('URL 01 modificada: ' + url01.href);
console.log('===============================================================================');



// 2.- CREACIÓN DE UNA NUEVA URL Y USO DE URLSEARCHPARAMS PARA GESTIONAR PARÁMETROS DE LA URL
console.log('===============================================================================');
console.log('URL 02: URLSearchParams ');
console.log('===============================================================================');
const url02 = new URL('/bands','http://rockmusic.com');
console.log('Atributos URL 02');
console.log('===============================================================================');
console.log(url02);

// 2.1.- BÚSQUEDA DE PARÁMETROS
let params = new URLSearchParams(url02.search);
console.log('===============================================================================');
// Uso del método .toString(), para visualizar solo la url, correspondiente a url.href
console.log('Ver URL 02 creada: ' + url02.toString());
console.log('===============================================================================');
// Añadir un parámetro query con un valor de 300
params.append('query',300);
// Ver el valor append añadido
console.log(params.toString());
// Conseguir el valor de query
params.get('query');
// Ajustar el valor de query a 1
params.set('query',1);
// Comprobar el cambio realizado
console.log(params.toString());
// Borrar el valor query
params.delete('query');
// Comprobar como está borrado
console.log(params);

