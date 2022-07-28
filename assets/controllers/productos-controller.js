import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (nombre, precio, url) =>{
    const card = document.createElement("div");
    const contenido = `
        <img src="${url}" alt="Producto">
        <p>${nombre}</p>
        <p>${precio}</p>
        <a href="">Ver producto</a>
        `;
    card.innerHTML = contenido;
    card.classList.add("productos__box");
    return card;
}

const productos = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.url));
        });
    }
    catch(erro) {
        console.log(erro);
    }
}

render();