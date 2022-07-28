const botonConsolas = document.querySelector(".menu__boton");

botonConsolas.addEventListener("click", () => {
    window.location.href = "#consolas";
});

const botonLogin = document.querySelector(".cabecera__boton");

botonLogin.addEventListener("click", () => {
    window.location.replace("./assets/screens/login.html");
});

const a = document.querySelectorAll(".verProducto");

a.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.composed);
        console.log(e.composedPath());
    })
})


