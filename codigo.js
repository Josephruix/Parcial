

function agregarAlCarrito(producto, precio) {
            
            
            const cartList = document.getElementById('cart');
            const li = document.createElement('li');
            li.innerText = producto;
            cartList.appendChild(li);

        
            const productoAgregadoContainer = document.getElementById('productoAgregadoContainer');
            productoAgregadoContainer.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto}</h5>
                        <p class="card-text">Precio: $${precio}</p>
                        <a href="Pagos.html?precio=&producto=" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            `;
        }

window.onload = function() {
    // Obtener el parámetro 'precio' de la URL
    const params = new URLSearchParams(window.location.search);
    const precio = params.get('precio');

    // Mostrar el precio en el elemento HTML
    document.getElementById('precioProducto').innerText = 'Precio del producto es : $' + precio;

    
    const nombre= params.get("producto")

    document.getElementById('nombreProducto').innerText = 'El producto eleguido es :' + nombre;
}
function mostrarAnuncio() {
    const correo = document.getElementById('exampleInputEmail1').value;
    const nombreCompleto = document.getElementById('exampleInputPassword1').value;
    const ciudad = document.getElementById('exampleInputPassword1').value;
    const telefono = document.getElementById('exampleInputPassword1').value;
    const precio = document.getElementById('precioProducto').innerText;
    const nombreProducto=document.getElementById("nombreProducto").innerText

    const anuncio = `Gracias por tu compra, ${nombreCompleto}.\n\nDetalles de la compra:\n- Producto: ${nombreProducto}\n- Cantidad: 1\n- Precio: ${precio}\n\nSe enviará un correo de confirmación a ${correo}.`;

    document.getElementById('anuncio').innerText = anuncio;
    alert("Informacion de la compra :"+anuncio)
}

