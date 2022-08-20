export const cargarProducto = (nombre, precio, url, id) => {
    const card = document.createElement("div");
    const contenido = `
    <img src="${url}" alt="Producto" class="box__imagenes">
    <div class="box__texto">
        <p>${nombre}</p>
        <p>$${precio}</p>
        <a href="./ver-producto.html?id=${id}">Ver producto</a>
    </div>
    `;
    card.innerHTML = contenido;
    card.classList.add("productos__box");
    return card;
}