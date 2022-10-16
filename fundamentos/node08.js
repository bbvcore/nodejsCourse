/*
=========================================
		PAQUETE FORMIDABLE
=========================================

Con el módulo formidable podrémos gestionar la subida de archivos al servidor
Además de este módulo nos hará falta el módulo http

*/
// 1.- IMPORTACIÓN DE LOS MÓDULOS
const server = require('http');
// Paquete 'formidable' para trabajar con gestión de ficheros
// npm install formidable --save
const formidable = require('formidable');
const fs = require('fs');

// 2.-  Creación del servidor
const PORT=3000;
server.createServer((req,res)=>{
	// Subir Fichero
	// La solicitud la conseguimos con el método url del objeto request
	// que será la ruta configurada en el campo action del formulario html
	if((req.url) == '/subirFichero'){
		// Creamos una instancia de la clase Formidable
		// Y ejecutamos su método IncomingFrom()
		console.log(req.url);
		// Utilizar el método IncomingForm() que sirve para gestionar entrada de datos por formulario
		const formi = new formidable.IncomingForm();
		console.log(formi);
		// parse() utiliza 3 argumentos:
		// err: maneja errores
		// fields: campos del formulario
		// files: fichero/s subido/s
		formi.parse(req, (err, fields,files)=>{
			// El fichero se almacena en el directorio tmp, temporal
			// Vamos a reubicarlo donde nos interese
			let tmp = files.ficheroUp.filepath;
			// localPath aloja la ruta donde vamos a almacenar nuestro fichero de forma permanente
			let localPath='C:\\Users\\admin\\';
			// Construimos la dirección final de nuestro documento
			// Uniendo la dirección local más el nombre del fichero subido y conformando la ruta final
			let newDir = localPath + files.ficheroUp.originalFilename;
			fs.rename(tmp, newDir,(err)=>{
			// Si aquí da un error, en la parte de almacenar de forma permanente se lanza aquí
			// y normalmente es por una cuestión de permisos del directorio de destino,
			// asegurarse de tener permisos de escritura en dicho directorio final
			if (err) throw err;
			res.write('Fichero subido');
			res.end();
			})
		})
	}else{
		res.writeHead(200,{'Content-Type':'text/html'});
		// Aquí es importante prestar atención a los 4 valores que usamos previamente:
		// action: nos da la url, para el request
		// enctype: con la codificación multipart/form-data le decimos que vamos a subir archivos
		// campo file, para que nos muestr un input de subida
		// campo name para poder extraer el nombre a través de files
		res.write(`
			<form action="subirFichero" method="post" enctype="multipart/form-data">
			<input type="file" name="ficheroUp">
			<input type="submit" value="Subir fichero">
			</form>
			`);
		res.end();
	}
}).listen(PORT);
