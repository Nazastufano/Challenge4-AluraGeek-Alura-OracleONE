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

const starWars = document.querySelector(".starWars__productos");
const consolas = document.querySelector(".consolas__productos");
const diversos = document.querySelector(".diversos__productos");

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            if(elemento.seccion == "StarWars" || elemento.seccion == 1){ 
                starWars.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
            } else if (elemento.seccion == "Consolas" || elemento.seccion == 2){
                consolas.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
            } else {
                diversos.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
            }
            
        });
    }
    catch(erro) {
        console.log(erro);
    }
}

render();




