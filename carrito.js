// Carrito de compras
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total-price');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.querySelector('.checkout-btn'); // Agregar esta línea
const productos = [
    { id: 1, nombre: 'Café Cerezo', precio: 80.00 },
    { id: 2, nombre: 'Café Pergamino', precio: 100.00 },
    { id: 3, nombre: 'Café Marago', precio: 120.00 }
];
let carrito = [];

// Mostrar el modal del carrito
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    actualizarCarrito();
});

// Ocultar el modal del carrito
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// ... (Resto de tu JavaScript) ...

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Actualizar el carrito
function actualizarCarrito() {
    cartItems.innerHTML = '';
    let total = 0;
    carrito.forEach((producto, index) => { // Agregar el índice en el bucle
        const item = document.createElement('div');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        cartItems.appendChild(item);
        total += producto.precio;
    });
    totalPrice.textContent = total.toFixed(2);
    cartCount.textContent = carrito.length;
}

// ... (Resto de tu JavaScript) ...

// Agregar event listeners a los botones "Comprar"
const botonesComprar = document.querySelectorAll('.producto .btn');
botonesComprar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        agregarAlCarrito(index + 1);
    });
});

// Simular el proceso de pago
checkoutBtn.addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('¡Pago realizado con éxito!');
        carrito = [];
        actualizarCarrito();
        cartModal.style.display = 'none';
    } else {
        alert('El carrito está vacío.');
    }
});