// Importamos el módulo readline para capturar datos desde la consola.
import * as readline from 'readline';

// Creamos una interfaz para manejar la entrada y salida desde la consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Esta función `preguntas` toma una pregunta como argumento y devuelve una promesa que se resuelve con la respuesta del usuario.
const preguntas = (pregunta: string): Promise<string> => { 
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta.trim());
        });
    }); 
};

// Esta función asíncrona `iniciarFormulario` presenta un formulario interactivo, solicitando al usuario su nombre, edad, correo electrónico y país.
const iniciarFormulario = async () => {
    console.log("=== Formulario Interactivo ===");
    const nombre = await preguntas("¿Cuál es tu nombre?: ");
    const edad = await preguntas("¿Cuál es tu edad?: ");
    const email = await preguntas("¿Cuál es tu correo?: ");
    const pais = await preguntas("¿En qué país vives?: ");

// Comprobamos si la edad es un número y mayor a 0.
if (isNaN(Number(edad)) || Number(edad) <=0){
    console.log("La edad debe ser un número válido mayor a 0");
    rl.close();
    return;
}

// Comprobamos si el correo electrónico contiene un "@"
if(!email.includes("@")){
    console.log("Por favor ingresar un correo electrónico válido!!!");
    rl.close();
    return;
}

// Mostramos un resumen de los datos ingresados.
console.log("\n=== Resumen de formulario ===")
console.log(`Nombre, ${nombre}`)
console.log(`Edad, ${edad}`)
console.log(`Email, ${email}`)
console.log(`Pais, ${pais}`)
console.log("\n Gracias por completar el formulario")
rl.close();
};

iniciarFormulario(); // Llamamos a la función `iniciarFormulario` para iniciar el formulario interactivo.