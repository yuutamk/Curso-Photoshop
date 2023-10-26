const abrirMenu = document.getElementById("menu-toggle");
const toggleButton = document.getElementById("toggle-button");

// Agrega un evento clic al botón de toggle
abrirMenu.addEventListener("click", () => {
    const menuLateral = document.querySelector(".menu-lateral.mobile"); // Selecciona el menú lateral

    // Alternar la clase "visible" en el menú
    menuLateral.classList.toggle("visible");

    // Si el menú está visible, ajusta el margen del contenido principal
    const contenidoPrincipal = document.querySelector(".contenido");
    if (menuLateral.classList.contains("visible")) {
        contenidoPrincipal.style.marginLeft = "0"; // o cualquier otro valor necesario
    } else {
        contenidoPrincipal.style.marginLeft = "20%"; // o el margen deseado
    }
});
