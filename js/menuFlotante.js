document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");
 /*    const nav = document.querySelector("#nav"); */
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const abrirLateral = document.querySelector("#abrir-lateral");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    abrirLateral.addEventListener("click", () => {
        nav.classList.add("visible");
    });
});
