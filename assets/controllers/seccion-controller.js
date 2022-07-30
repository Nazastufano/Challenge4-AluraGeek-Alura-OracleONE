import { productoServices } from "../services/productos-servicios.js";


const cargarProducto = (nombre, precio, url, id) => {
    const card = document.createElement("div");
    const contenido = `
    <img src="${url}" alt="Producto" class="box__imagenes">
    <p>${nombre}</p>
    <p>$${precio}</p>
    <a href="./ver-producto.html?id=${id}">Ver producto</a>
    `;
    card.innerHTML = contenido;
    card.classList.add("productos__box");
    return card;
}

const obtenerSeccion = async () => {
    const url = new URL(window.location);
    const seccion = url.searchParams.get("seccion");

    try{
        const secciones = await productoServices.seccionProductos(seccion);
        if(true){
            const productos = document.querySelector("[datos-productos]");
            console.log(secciones);

            secciones.forEach(elemento => {
                productos.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
            });

        }else{
            throw new Error();
        }
    } catch(error){
        console.log("Catch Error - ", error);
        //window.location.href = "./assets/screens/error.html";
    }
}

obtenerSeccion();