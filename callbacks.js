function tareaLenta(mensaje, tareaTerminada) {//tareaterminada es un callback, una funcion que se ejecuta cuando la tarea lenta termina
    console.log("Empezando la tarea...");


    // Simulamos una tarea lenta usando setTimeout
    setTimeout(() => {
        console.log(mensaje);
        tareaTerminada(); // Ejecutamos el callback cuando la tarea termina
    }, 2000); // Simulamos 2 segundos de "trabajo", termine decontar los 2 segundos y el event loop lo envia al stack queue, cuando el call stack esta vacio, el event. lo envia al call stack y se ejecuta



}


function tareaTerminada() {
    console.log("¡La tarea ya terminó!");
}


// La función tareaLenta se ejecuta, y cuando termina, llama a tareaTerminada como callback, usando el setTimeout para simular una tarea lenta.
tareaLenta("Procesando algo importante", tareaTerminada);

console.log("Sigo haciendo cosas mientras espero...");//ejecuta esto sincrono primero






//Un callback es una función que pasas a otra para que la ejecute, no importa si es síncrona o asíncrona.