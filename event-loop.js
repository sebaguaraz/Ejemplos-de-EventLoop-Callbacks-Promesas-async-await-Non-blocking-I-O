console.log("Inicio"); // Se ejecuta primero, se imprime inmediatamente (Call Stack).

setTimeout(() => { // Se registra en las Web APIs y su callback es enviado a la Task Queue.
    console.log("setTimeout");//setTimeout es asíncrono. Esta tarea (imprimir "Primer setTimeout...") 
    // queda pendiente y no se ejecuta hasta que el event loop la procese más adelante.
}, 0);

Promise.resolve().then(() => {  // Se ejecuta y su callback va a la Microtask Queue.
    console.log("Promise");
});

console.log("Fin"); // Se imprime inmediatamente.

/**
 * Resultado esperado:
 * Inicio
 * Fin
 * Promise
 * setTimeout

 * En orden de importancia: 
 * Se ejecuta primero lo del call stack.
 * Se ejecuta luego lo del microtask queue.
 * Se ejecuta luego lo del task queue.

 * Call Stack (Pila de Llamadas)
 * Es la estructura donde JavaScript ejecuta funciones de manera síncrona.
 * Cuando una función se invoca, se apila en el stack y se ejecuta.
 * Una vez que se completa, se desapila.

 *  Microtask Queue (Cola de Microtareas)
 * Tiene prioridad sobre otras colas.
 * Contiene:
 * Callbacks de Promise.then(), catch(), finally()
 * MutationObserver (API del DOM)
 * process.nextTick() (solo en Node.js)
 * Se ejecuta inmediatamente después de que el stack se vacía.

 * Task Queue (Cola de Macrotareas o Callback Queue)
 * Contiene tareas como:
 * setTimeout y setInterval
 * setImmediate (solo en Node.js)
 * I/O (eventos del sistema, como archivos o sockets)
 * Se ejecutan después de la Microtask Queue.
 */



















/**
 
Primero, lo síncrono en el call stack:
El motor de JavaScript ejecuta todo el código síncrono línea por línea en el call stack. Esto pasa de inmediato.
Lo asíncrono con temporizador:

Si hay algo como setTimeout, el motor no ejecuta el callback de inmediato. En vez de eso:
Delega el temporizador a libuv.
Libuv "cuenta" el tiempo (por ejemplo, 2 segundos) en segundo plano.
Mientras tanto, el motor sigue con el resto del código síncrono.

Cuando el temporizador termina de contar los segundos:
Una vez que el tiempo se cumple (los 2 segundos, por ejemplo), libuv pone el callback del temporizador en la task queue.
(Nota: El callback no entra a la task queue hasta que el tiempo termina, no antes).

El event loop actúa cuando el call stack está vacío:
Cuando el call stack se vacía (es decir, no hay más código síncrono por ejecutar), el event loop empieza a girar.
Revisa la task queue en su fase de timers.
Si hay un callback listo (como el del setTimeout), lo toma de la task queue y lo pone en el call stack.
 */