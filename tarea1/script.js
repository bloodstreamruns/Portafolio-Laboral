document.addEventListener("DOMContentLoaded", () => {

    //lista de caracteres que se pueden usar para generar la contraseña
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+-=";

    //referencias a los elementos del DOM
    const inputLongitud = document.getElementById("longitud");
    const valorLongitud = document.getElementById("valor-longitud");
    const resultado = document.getElementById("resultado");
    const boton = document.getElementById("generar");

    //referencias a los checkboxes
    const checkMayusculas = document.getElementById("mayusculas");
    const checkMinusculas = document.getElementById("minusculas");
    const checkNumeros = document.getElementById("numeros");
    const checkSimbolos = document.getElementById("simbolos");

    //manejo dinámico del slider que muestra la longitud de la contraseña seleccionada
    inputLongitud.addEventListener("input", () => {
        valorLongitud.textContent = inputLongitud.value;
    });

    //este es le botón que genera la contraseña al hacer clic
    //también valida que por lo menos uno de los checkboxes esté seleccionado
    boton.addEventListener("click", () => {
        let caracteres = "";

        if (checkMayusculas.checked) {
            caracteres += mayusculas;
        }
        if (checkMinusculas.checked) {
            caracteres += minusculas;
        }
        if (checkNumeros.checked) {
            caracteres += numeros;
        }
        if (checkSimbolos.checked) {
            caracteres += simbolos;
        }

        if (caracteres === "") {
            resultado.textContent = "Seleccioná al menos una opción.";
            return;
        }

        //aquí obtiene la longitud de la contraseña a generar
        const longitud = parseInt(inputLongitud.value);
        let contrasena = "";

        //generación de la contraseña aleatoria por medio de un bucle que selecciona caracteres al azar de la cadena de caracteres permitidos
        //y la función Math.random() para obtener un índice aleatorio
        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indiceAleatorio];
        }

        resultado.textContent = contrasena;
    });

});