const form = document.getElementById('form').addEventListener('submit', function (e) {
    // Obteniendo valores del formulario
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const price = document.getElementById('price').value;
    const deliveryDate = document.getElementById('deliveryDate').value;

    // Previene el evento de carga
    e.preventDefault();

    // Creando elementos
    const container = document.querySelector('.display');
    
    const message = document.createElement('h2');
    const nombre = document.createElement('h3');
    const apellido = document.createElement('h3');
    const edad = document.createElement('h3');
    const fechaEntrega = document.createElement('h3')
    
    // Insertando valores del formulario dentro de los nuevos elementos creados
    message.innerHTML = "Informacion del pedido: "
    nombre.innerHTML = `Nombre: ${name}`
    apellido.innerHTML = `Producto: ${product}`
    edad.innerHTML = `Precio: ${price}`
    fechaEntrega.innerHTML = `Fecha de Entrega: ${deliveryDate}`

    // Añadiendo elementos al contenedor
    container.appendChild(message)
    container.appendChild(nombre)
    container.appendChild(apellido)
    container.appendChild(edad)
    container.appendChild(fechaEntrega)
})