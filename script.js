document.addEventListener("DOMContentLoaded", () => {

    //manejo dinámico de los modos claro y oscuro
    const botonModo = document.createElement("button");
    botonModo.textContent = "Modo claro";
    botonModo.id = "toggle-modo";
    document.querySelector("nav").appendChild(botonModo);

    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("modo-claro");
        const activo = document.body.classList.contains("modo-claro");
        botonModo.textContent = activo ? "Modo oscuro" : "Modo claro";
    });

    // validación rudimentaria del formulario de contacto tanto con expresiones regulares como con longitud mínima de caracteres
    const formulario = document.getElementById("form-contacto");
    const inputNombre = document.getElementById("nombre");
    const inputEmail = document.getElementById("email");
    const inputMensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let esValido = true;
        const errores = [];

        if (inputNombre.value.trim().length < 2) {
            esValido = false;
            errores.push("El nombre debe tener al menos 2 caracteres.");
        }

        const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronEmail.test(inputEmail.value.trim())) {
            esValido = false;
            errores.push("Ingresá un email válido.");
        }

        if (inputMensaje.value.trim().length < 10) {
            esValido = false;
            errores.push("El mensaje debe tener al menos 10 caracteres.");
        }

        mostrarFeedback(esValido, errores);

        if (esValido) {
            formulario.reset();
        }
    });
    // función para mostrar feedback al usuario
    function mostrarFeedback(esValido, errores) {
        let contenedorFeedback = document.getElementById("feedback-formulario");

        if (!contenedorFeedback) {
            contenedorFeedback = document.createElement("div");
            contenedorFeedback.id = "feedback-formulario";
            formulario.appendChild(contenedorFeedback);
        }

        contenedorFeedback.innerHTML = "";
        //validar si el formulario es válido y mostrar el mensaje correspondiente
        if (esValido) {
            contenedorFeedback.textContent = "Mensaje enviado correctamente.";
            contenedorFeedback.className = "feedback exito";
        } else {
            const lista = document.createElement("ul");
            errores.forEach((error) => {
                const item = document.createElement("li");
                item.textContent = error;
                lista.appendChild(item);
            });
            contenedorFeedback.appendChild(lista);
            contenedorFeedback.className = "feedback error";
        }
    }

    // funcionalidad dinámica para mostrar el año actual en el footer
    const footer = document.querySelector("footer");
    const parrafoAnio = document.createElement("p");
    parrafoAnio.textContent = `© ${new Date().getFullYear()} Daniel Sánchez Rodríguez`;
    footer.appendChild(parrafoAnio);

});