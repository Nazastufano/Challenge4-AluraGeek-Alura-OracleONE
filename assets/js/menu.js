const logo = document.querySelector(".cabecera__imagen");

logo.addEventListener("click", () => {
    if(window.location.href == "http://127.0.0.1:5500/VisualEstudioCode%20programas/Alura%20Challenge%20-%20Desaf%C3%ADo%204%20-%20L%C3%B3gica/index.html"){
        window.location.href = "././index.html";
    } else {
        window.location.href = "../../index.html";
    }
});

const btn = document.querySelector(".menu__boton");

btn.addEventListener("click", () => {
    window.location.href = "#consolas";
});

