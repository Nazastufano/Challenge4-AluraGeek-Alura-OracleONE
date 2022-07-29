import { productoServices } from "../services/productos-servicios.js";


const h2 = document.querySelector(".titulo__h2");
const inputSearch = document.querySelector('.cabecera__input').value;

h2.innerHTML = `Resultados de "${inputSearch}"`

const cargarProducto = (nombre, precio, url, id) => {
    const card = document.createElement("div");
    const contenido = `
    <img src="${url}" alt="Producto" class="box__imagenes">
    <p>${nombre}</p>
    <p>$${precio}</p>
    <a href="./assets/screens/ver-producto.html?id=${id}">Ver producto</a>
    `;
    card.innerHTML = contenido;
    card.classList.add("productos__box");
    return card;
}

const obtenerBusqueda = async () => {
    const url = new URL(window.location);
    const nombre = url.searchParams.get("nombre");

    try{
        const nombreResultado = await productoServices.nombreProducto(nombre);
        if(true){
            const busqueda = document.querySelector("[datos-productos]");
            console.log(nombreResultado, inputSearch);

            nombreResultado.forEach(elemento => {
                busqueda.appendChild(cargarProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
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