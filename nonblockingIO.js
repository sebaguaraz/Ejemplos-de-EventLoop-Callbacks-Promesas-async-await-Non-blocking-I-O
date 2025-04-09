const fs = require('fs'); // Esto es como pedirle a Node.js que traiga la caja de herramientas para trabajar con archivos

console.log("Inicio del programa"); // Esto es lo primero que se imprime, como decir "¡arrancamos!"

fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err); // Si algo sale mal, nos avisa aquí
        return;
    }
    console.log("Contenido del archivo:", data); // Si todo sale bien, imprime lo que leyó
});

console.log("Fin del programa"); // Esto se imprime justo después, sin esperar


/**En programación, Non-blocking I/O es como el segundo caso. Cuando le pides a Node.js algo que toma tiempo (como leer un archivo o pedir datos de internet), 
 * no se queda "parado" esperando la respuesta. 
 * En lugar de eso, sigue haciendo otras cosas (como ejecutar más código) y, cuando la tarea termina, Node.js te "avisa" para que hagas algo con el resultado. */