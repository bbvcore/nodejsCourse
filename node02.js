/*
/*
=======================
 INSTRUCCIONES BÁSICAS
=======================
-------------------------------------------------
A.- PRÁCTICA DE FUNDAMENTOS TEÓRICOS DE NODEJS
-------------------------------------------------
1.- En la práctica anterior importamos un módulo que era un paquete
http, en esta ocasión vamos a importar un módulo que nosotros previamente
crearemos, además le pasaremos también dos variables a ese módulo
para poder trabajar con ellas.

La finalidad de esta práctica es asimilar algunos conceptos básicos
que no se suelen explicar en ejemplos que se ven por la red y evitar
a los usuarios de este tutorial tener que investigar por su cuenta
y tener así la información aquí accesible.

2.- Crear un módulo: para ello creamos un fichero en el directorio
de trabajo en el que estamos y lo llamaremos 'primerModulo.js'.
Dentro del fichero crearemos un módulo para exportar con el siguiente código:

module.exports = (var1,var2) =>{
	let suma = var1 + var2;
	return suma;
}


module.exports es el código que le dice a nodejs que se trata de un módulo a exportar.

El módulo está compuesto por una función anónima en formato flecha que recibe 2 argumentos
a través de 2 parámetros que se usarán para realizar una multiplicación y retornar el resultado.

*/

// EJERCICIO VISIBLE A TRAVÉS DE LA TERMINAL O CONSOLA
//=====================================================
// Declaramos las variables
let var1=2;
let var2= 3;
// Importamos nuestro módulo, como en el ejemplo anterior usamos
// una constante donde almacenamos el módulo con un require.
// A mayores, añadímos unos paréntesis con las 2 variables declaradas.
const modulo = require('./primerModulo')(var1, var2);
// Nos devuelve el valor por consola.
console.log('El resultado de la multiplicación es: ' + modulo);

// A TRAVÉS DE UN SERVER para ver en el NAVEGADOR WEB
//====================================================
// Así depaso repasamos lo aprendido hasta el momento, ya que
// creamos el servidor de la misma forma que en el ejercicio anterior.
const server = require('http');
server.createServer((req,res)=>{
  // Mostramos resultado de la operación con el módulo:
  res.end('El resultado de multiplicar las dos variables es: ' + modulo);
// Para ver que el número del puerto siempre que sea superior a 1024
// no influye, en este caso he configurado el puerto con el valor 5000
}).listen(5000);
