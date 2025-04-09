// Creamos una Promesa que simula una tarea asíncrona
const esperarMensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Hola, soy un mensaje!");
    }, 2000);
});

// Creamos una función async para manejar la Promesa
async function obtenerMensaje() {
    try {
        console.log("Esperando el mensaje...");
        const mensaje = await esperarMensaje;//await pausa la ejecución de obtenerMensaje() hasta que esperarMensaje se resuelva. el await puede capturar resolve o reject.
        // Si esperarMensaje se resuelve, el valor se asigna a mensaje.
        console.log(mensaje);//await esperarMensaje devuelve el valor de resolución ("¡Hola, soy un mensaje!"), que se asigna a mensaje.
    } catch (error) {
        console.log("Error:", error);
    }
}

// Llamamos a la función async
obtenerMensaje();
console.log("Esto se ejecuta mientras esperamos el mensaje");