import { productoServices } from "../services/productos-servicios.js";

const url = new URL(window.location);
const search = url.searchParams.get('search');

const inputSearch = search;

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

const obtenerBusqueda = async () => {
    try{
        const nombreResultado = await productoServices.listaProductos();

        if(true){
            const h2 = document.querySelector(".titulo__h2");
            h2.innerHTML = `Resultados de "${search}"`
            const busqueda = document.querySelector("[datos-productos]");


            nombreResultado.forEach(elemento => {
                if(elemento.nombre.toLowerCase().includes(inputSearch)){
                    busqueda.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
                }
            });

        }else{
            throw new Error();
        }
    } catch(error){
        console.log("Catch Error - ", error);
        //window.location.href = "./assets/screens/error.html";
    }
}

obtenerBusqueda();

