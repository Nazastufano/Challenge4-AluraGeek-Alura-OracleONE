//import { validarBoton } from "../js/productos.js";
import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nombre = document.querySelector('[data-tipo="nombreProducto"]').value;
    const seccion = document.querySelector('[data-tipo="lista"]').value;
    const precio = document.querySelector('[data-tipo="numero"]').value;
    const descripcion = document.querySelector('[data-tipo="descripcion"]').value;
    const url = document.querySelector('[data-tipo="img"]').value;
    
    productoServices.creaProducto(nombre, url, precio, descripcion, seccion).then(respuesta => {
        window.location.replace("../../index.html");
        alert("EL PRODUCTO FUE CREADO CON EXITO");

        console.log(respuesta);
    }).catch(err => {
        console.log(err);
    });
});
