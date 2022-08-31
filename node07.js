/*
=========================================
		GESTIÓN DE EVENTOS
=========================================
Instalación del módulo: npm install events --save

*/
// Importamos el módulo events
const events = require('events');

// Creando una instancia de events para usar el emisor de eventos
const eventEmitter = new events.EventEmitter();

// Creamos una función para el manejador de eventos
function mensajePorConsola(){
	console.log('Ha lanzado un evento!!!')
}

// Asignación de la función al evento load
// Usamos el método on() para ello.
eventEmitter.on('load',mesajePorConsola);

// Lanzar evento, con el método emit()
// El evento load se dispará al cargar la página
eventEmitter.emit('load');