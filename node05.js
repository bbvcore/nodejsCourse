const server = require('http');
const fs = require('fs');

server.createServer((req, res)=>{
// 1.- LEER FICHERO
	// A.- READFILE
	// Método readFile usa 2 argumentos: 'name'y una función callback(err,data)
	// 'data' se encarga de la carga del fichero
	// 'err' muestra los errores del proceso
	//****************************************************************
	// Previamente hemos creado un directorio en el raíz llamado files
	//****************************************************************
	fs.readFile('./files/file01.html', (err, data) => {
	   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	   res.write(data);
	   res.end('Se ha cargado file01.html');
	 });

// 2.- CREAR FICHERO
	// A.- APPENDFILE
	// Método appendFile usa 3 argumentos: nombre fichero, contenido del mismo, función callback (err)
	fs.appendFile('./files/file02appendMethod.html','Fichero creado por método appendFile',(err)=>{
		if(err) throw err;
		console.log('Fichero creado');
	});

	// B.- OPEN
	// Método open, usa 3 argumentos, nombre, w de write y callback
	fs.open('./files/file03openMethod.html', 'w', (err,file) => {
	  if (err) throw err;
	  console.log('Creado!');
	});


	// C.- WRITEFILE
	fs.writeFile('./files/file04writenMethod.html','Fichero creado por el método writefile',(err)=>{
		if(err) throw err;
		console.log('Fichero creado');
	});


// 3.- MODIFICAR FICHERO
	// Para modificar el fichero podemos usar 2 opciones principalmente, además ya vistas:
	// Método appendfile()
	// Método writeFile()
	// Ambos métodos permiten añadir y sobreescribir el contenido del fichero


// 4.- ELIMINACIÓN DE FICHERO
/*
	Usamos el método unlink(), con argumento el nombre del fichero

	fs.unlink('./files/file03openMethod.html',(err)=>{
  		if (err) throw err;
  		console.log('Fichero borrado');
  	})	
*/
res.end('Todo Ok')
}).listen(3000);
