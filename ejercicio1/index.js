const form = document.getElementById('form').addEventListener('submit', function (e) {
    // Obteniendo valores del formulario
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    // Previene el evento de carga
    e.preventDefault();

    // Creando elementos
    const container = document.querySelector('.display');
    const nombre = document.createElement('h4');
    const apellido = document.createElement('h4');
    const edad = document.createElement('h4');
    
    // Insertando valores del formulario dentro de los nuevos elementos creados
    nombre.innerHTML = `Nombre: ${name}`
    apellido.innerHTML = `Apellido: ${surname}`
    edad.innerHTML = `Edad: ${age}`

    // Añadiendo elementos al contenedor
    container.appendChild(nombre)
    container.appendChild(apellido)
    container.appendChild(edad)
})