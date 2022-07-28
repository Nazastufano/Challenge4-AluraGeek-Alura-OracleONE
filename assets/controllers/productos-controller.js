import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (nombre, precio, url) =>{
    const card = document.createElement("div");
    const contenido = `
        <img src="${url}" alt="Producto" class="box__imagenes">
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

/*
<div class="box__container">
    <button class="container__boton editar">Editar</button>
    <button class="container__boton eliminar">Eliminar</button>
</div>
*/