// Creamos una promesa
const entregaPaquete = new Promise((resolve, reject) => { //Creamos una promesa con new Promise. Le pasa por parametro: resolve: Se llama cuando la tarea tiene éxito. Y reject: Se llama cuando hay un error.
    console.log("Preparando tu paquete...");
    // Simulamos una espera de 2 segundos
    setTimeout(() => {//imitando una tarea asíncrona
      const exito = true; // Cambia a "false" para simular un fallo
      if (exito) {
        resolve("¡Paquete entregado!"); // Éxito (crea el estado), ese msj se pasa directamente al callback de .then
      } else {
        reject("El paquete se perdió :("); // Error(crea el estado)
      }
    }, 2000);
  });
  
  // Usamos la promesa
  entregaPaquete //.then y .catch son métodos de la promesa.
    .then((mensaje) => {//El valor pasado a resolve ("¡Paquete entregado!") se envía automáticamente al .then como el argumento mensaje.
      console.log(mensaje); // Si se resuelve
    })
    .catch((error) => {
      console.log(error); // Si falla
    });


    //si yo pusiera un console.log por fuera del .then y el . catch, se ejecutarian antes porque ellos son microtasks y son asincronosss.









    /*Definicion:
    
    Una promesa es una forma de manejar operaciones asíncronas, como una garantía de que algo (como una tarea que toma tiempo) eventualmente te dará un resultado o un error.
    Una promesa puede estar en tres estados:

    Pendiente (pending): Todavía no ha terminado.
    Resuelta (fulfilled): Terminó con éxito y tiene un resultado.
    Rechazada (rejected): Falló y tiene un error.


    Cuando creas una promesa con new Promise, tienes que darle una función. Esa función es lo que define qué va a pasar dentro de la promesa.
    Esta función recibe dos herramientas mágicas que JavaScript te da: resolve y reject. Son como botones que puedes presionar para decir "¡Terminé con éxito!" o "¡Algo salió mal!".
    resolve: Lo usas para decir "Todo salió bien, aquí está el resultado".
    reject: Lo usas para decir "Fallé, aquí está el problema".
    El => { es una forma moderna (llamada arrow function) de escribir funciones en JavaScript. Es lo mismo que escribir function(resolve, reject) {, pero más corto.
      
      
    */