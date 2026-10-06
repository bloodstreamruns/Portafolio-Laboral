document.addEventListener("DOMContentLoaded", () => {

    // este es el menú para hamburguesa, que se mostrará en pantallas chicas
    const botonMenu = document.createElement("button");
    botonMenu.textContent = "☰"; 
    botonMenu.id = "boton-menu";
    document.querySelector("header").appendChild(botonMenu); 

    const nav = document.querySelector("nav ul"); 


    botonMenu.addEventListener("click", () => {
        nav.classList.toggle("menu-abierto");
    });

    // este resalta el enlace activo en el menú de navegación
    const enlacesNav = document.querySelectorAll("nav a");

    enlacesNav.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            enlacesNav.forEach((item) => {
                item.classList.remove("activo");
            });
            enlace.classList.add("activo");

            //aquí cierra el menú al hacer clic en un enlace
            nav.classList.remove("menu-abierto");
        });
    });

    //estas son cartas que se exanden al hacer clic, mostrando más información
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("expandida");
        });
    });

    //año dinámico en el footer
    const footer = document.querySelector("footer");
    const parrafoAnio = document.createElement("p");
    parrafoAnio.textContent = `© ${new Date().getFullYear()} [Nombre del Producto]`;
    footer.appendChild(parrafoAnio);

});