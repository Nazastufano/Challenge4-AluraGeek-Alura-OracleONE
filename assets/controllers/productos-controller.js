import { productoServices } from "../services/productos-servicios.js";
import { cargarProducto } from "../js/cargarProducto.js";

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