const logo = document.querySelector("#menuPrincipalLogin");

logo.addEventListener("click", () => {
    let respuesta = confirm("Está seguro que desea volver al inicio? Se cerrará sesión automaticamente");
    if(respuesta == true){
        window.location.replace("././index.html");
    }
});

const agregarProducto = document.querySelector("#agregarProducto");

agregarProducto.addEventListener("click", () => {
    window.location.replace("./assets/screens/productos.html");    
});
