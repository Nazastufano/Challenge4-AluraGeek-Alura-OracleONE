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

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
}

const seccionProductos = (seccion) => {
    return fetch(`http://localhost:3000/producto/?seccion=${seccion}`).then((respuesta) => respuesta.json());
}

const nombreProducto = (nombre) => {
    return fetch(`http://localhost:3000/producto/?nombre=${nombre}`).then((respuesta) => respuesta.json());
}

const actualizarProducto = (nombre, precio, descripcion, seccion, url, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio, descripcion, seccion, url})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

export const productoServices = {
    listaProductos,
    creaProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    seccionProductos,
    nombreProducto,
}

