const logo = document.querySelector(".cabecera__imagen");

logo.addEventListener("click", () => {
    let respuesta = confirm("Está seguro que desea volver al inicio? Se cerrará sesión automaticamente");
    if(respuesta == true){
        window.location.replace("../../index.html")
    }
});

const agregar = document.querySelector(".agregar__boton");

agregar.addEventListener("click", (event) => {
    event.preventDefault;
    validarBoton();
});

function validarBoton(){
    const error = document.querySelector(".error");
    const select = document.querySelector(".select");
    console.log(select.value);
    error.innerHTML = "";

    if(select.value == 0){
        error.innerHTML = "Recuerda seleccinar una categoría";
        agregar.disabled = true;
    }
    select.addEventListener("blur", () => {
        if(select.value != 0){
            agregar.disabled = false;
            console.log("Hecho", select.value);
            return select.value
        }
    });
}