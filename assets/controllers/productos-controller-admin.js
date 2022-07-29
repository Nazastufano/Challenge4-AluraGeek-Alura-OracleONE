import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (nombre, precio, url, id) =>{
    const card = document.createElement("div");
    const contenido = `
        <img src="${url}" alt="Producto" class="box__imagenes">
        <p>${nombre}</p>
        <p>$${precio}</p>
        <div class="box__container">
            <button class="container__boton editar" id="${id}">Editar</button>
            <button class="container__boton eliminar" id="${id}">Eliminar</button>
        </div>
        `;
    card.innerHTML = contenido;
    card.classList.add("productos__box");

    const btn = card.querySelector(".eliminar");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServices.eliminarProducto(id)
        .then(respuesta => {
            console.log(respuesta);
        })
        .catch(err => alert("Ocurrió un error"));
    });

    const bton = card.querySelector(".editar");
    bton.addEventListener("click", () => {
        const id = btn.id;
        window.location.href=`./assets/screens/editar-producto.html?id=${id}`
    })

    return card;
}

const productos = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
        });
    }
    catch(erro) {
        console.log(erro);
    }
}

render();