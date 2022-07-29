import { productoServices } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        //window.location.href = "./assets/screens/error.html";
    }
    const nombre = document.querySelector('[data-tipo="nombreProducto"]');
    const seccion = document.querySelector('[data-tipo="lista"]');
    const precio = document.querySelector('[data-tipo="numero"]');
    const descripcion = document.querySelector('[data-tipo="descripcion"]');
    const img = document.querySelector('[data-tipo="img"]');

    try{
        const producto = await productoServices.detalleProducto(id);
        if(producto.nombre && producto.seccion && producto.precio && producto.descripcion && producto.url){
            nombre.value = producto.nombre;
            if(producto.seccion == "StarWars" || producto.seccion == 1){
                seccion.value = 1
            } else if(producto.seccion == "Consolas" || producto.seccion == 2) {
                seccion.value = 2
            } else{
                seccion.value = 3
            }
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
            img.value = producto.url;
        }else{
            throw new Error();
        }
    } catch(error){
        console.log("Catch Error - ", error);
        //window.location.href = "./assets/screens/error.html";
    }
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector('[data-tipo="nombreProducto"]').value;
    const seccion = document.querySelector('[data-tipo="lista"]').value;
    const precio = document.querySelector('[data-tipo="numero"]').value;
    const descripcion = document.querySelector('[data-tipo="descripcion"]').value;
    const img = document.querySelector('[data-tipo="img"]').value;

    productoServices.actualizarProducto(nombre, precio, descripcion, seccion, img, id).then(() => {
        window.location.href = "../../menu-admin.html";
    });
});
