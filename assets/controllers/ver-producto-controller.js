import { productoServices } from "../services/productos-servicios.js";

const verProducto = (nombre, precio, url, seccion, descripcion, id) => {
    const card = document.createElement("div");
    const contenido = `
    <img src="${url}" alt="Producto" class="box__imagen">
    <div class="box__descripcion">
        <h1>${nombre}</h1>
        <h2>$${precio}</h2>
        <p>${descripcion}</p>
    </div>
    `;
    card.innerHTML = contenido;
    card.classList.add("productos__box--verMas");
    return card;
}

const render = async () => {
    try {
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        const productos = document.querySelector("[datos-productos]");
        if(id == null){
            //window.location.href = "./assets/screens/error.html";
        }
        const producto = await productoServices.detalleProducto(id);
        if(producto.nombre, producto.precio, producto.url, producto.seccion, producto.descripcion, producto.id){
            productos.appendChild(verProducto(producto.nombre, producto.precio, producto.url, producto.seccion, producto.descripcion, producto.id));
        }else{
            throw new Error();
        }    
    }
    catch(erro){
        console.log(erro);
    }
}

render();

////////////////// Funcion para generar los productos similares //////////////////

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

const consolas = document.querySelector(".consolas__productos");

const renderSimilares = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            if(elemento.seccion == "Consolas" || elemento.seccion == 2){ 
                consolas.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
            }
        });
    }
    catch(erro) {
        console.log(erro);
    }
}

renderSimilares();