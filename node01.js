/*
=======================
 INSTRUCCIONES BÁSICAS
=======================
-------------------------------------------------
A.- INSTALAR NODEJS (y su gestor de paquetes NPM)
-------------------------------------------------
1.- Descargar nodejs de su web: www.nodejs.org/es/download
2.- Instalar nodejs (según sistema operativo)
3.- Comprobar instalación de nodejs y npm: 
3.1.- Acceder a una terminal y escribir: node -v
3.2.- Acceder a un terminal y escribir: npm -v
4.- Crear un proyecto:
4.1.- Crear directorio y acceder a él
4.2.- Ejecutar comando: npm install -y, se creará el package.json 
para todas las aplicaciones nodejs.
4.3.- Crear un fichero con extensión js, 
se le suele llamar index.js, app.js o server.js
---------------------------------------------------
B.- PRIMER EJERCICIO: Fichero 'node01.js'
--------------------------------------------------*/
// COMENZAMOS CON EL PRIMER EJERCICIO
// SERVIDOR WEB CON EL MENSAJE 'HOLA GENTE'
// 1.- Instalar paquete http e importarlo a la aplicación
// 1.1.- Desde el directorio creado, y desde la consola
// escribimos: npm install http --save
// 2.- Importamos el módulo http después de haber instalado el paquete
// y lo almacenamos en una variable llamada server
const server = require('http');
// 3.- Utilizamos el método createServer combinado con una función anónima
// tipo flecha que trabaja siempre con dos parámetros, request y response, 
// la solicitud al servidor y la respuesta del mismo.
server.createServer((req,res)=>{
	// Este mensaje se verá en la consola
	console.log('Server Runs');
	// Este mensaje se verá en el navegador.
	// Usamos el argumento del parámetro res combinado con el método end y mostramos
	// la cadena 'Hola Gente'
	res.end('Hola Gente');
	// El método listen nos permite configurar un puerto para acceder a nuestro 
	// servidor, como el puerto estándar en http es el 80, y por debajo de 1024
	// suelen estar ocupados, usamos un número superior a 1024 como mínimo, se suele
	// usar habitualmente el 3000, por ello en este caso usamos el 3000.
}).listen(3000);
// 4.- Ejecutar la aplicación desde la terminal: node node01.js
// En la terminal veremos el mensaje "Server Runs" y en el navegador
// yendo a la dirección 'localhost:3000' veremos la cadena 'Hola Gente'.