const botonConsolas = document.querySelector(".menu__boton");

botonConsolas.addEventListener("click", () => {
    window.location.href = "#consolas";
});

const botonLogin = document.querySelector(".cabecera__boton");

botonLogin.addEventListener("click", () => {
    window.location.replace("./assets/screens/login.html");
});

