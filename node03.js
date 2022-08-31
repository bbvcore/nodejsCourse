/*
=====================================================
CREACCIÓN DE PETICIONES Y ESTRUCTURA: HEADERS Y BODY
=====================================================

Las peticiones HTTP estan formadas por: headers y body (o payload), es decir
tenemos el encabezado y el cuerpo.

A.- Cabeceras (header)
Configuración de cabeceras para el servidor creado con nodejs:
utilizaremos 3 métodos vinculados a la respuesta del servidor, es decir
al parámetro response 'res':
- setHeader('name','value')
- writeHead(status, mensajeTexto del estado, objeto encabezados):solemos 
usar el primer y tercer argumento.
- getHeaders(): Obtener las cabeceras

B.- Cuerpo (body)
Método write enviar un cuerpo de la respuesta, usa 3 argumentos:
- un chunk: un trozo de código, en este caso usamos la variable html con código html
- la codificación: en este caso utf-8
- función callback opcional, que aquí usamos para mandar un mensaje por consola.
*/

// Crear servidor
const server = require('http');
server.createServer((req,res)=>{

// Configuramos las cabeceras
  res.setHeader('Content-Type', 'text/css'); 
  res.setHeader("content-type", "text/html; charset=utf-8"); 
  res.setHeader('Content-Type', 'text/javascript');  

// Escribimos/sobreescribimos las cabeceras
  res.writeHead(200,{"content-type": "text/html; charset=utf-8"});
//  Write nos permite generar un body y darle formato
  	res.write('Ahhhhhg! Añadimos un poco de contenido al body!');
  	let html = `
	 <h1>Todo Ok</h1>
	 `;
  	res.write(html, "utf-8",()=>{console.log('El método write se uso genial')});

// Obtenemos las cabeceras que hemos definido
  const cabeceras = res.getHeaders();
    
// Mostrar cabeceras por terminal
// Se puede comprobar como se fusionan/sobrescriben ambas cabeceras, 
// tanto las escritas como las configuradas.
  console.log(cabeceras);

// Mensaje por navegador
res.end('Hemos mostrado y configurado las cabeceras');
}).listen(3000);