const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const creaProducto = (nombre, url, precio, descripcion, seccion, id) => {
    return fetch(`http://localhost:3000/producto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            url,
            precio,
            descripcion,
            seccion,
            id: uuid.v4()
        })
    })
    .then( respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error ("No fue posible crear un producto");
    })
}

export const productoServices = {
    listaProductos,
    creaProducto
}

