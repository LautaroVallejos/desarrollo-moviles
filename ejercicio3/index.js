const form = document.getElementById('form').addEventListener('submit', function (e) {
    // Obteniendo valores del formulario
    const celsius = document.getElementById('celsius').value

    let toFahrenheit = (Number(celsius) * 9/5) + 32

    // Previene el evento de carga
    e.preventDefault();

    // Creando elementos
    const container = document.querySelector('.display');
    
    const fahrenheit = document.createElement("h1");
    
    // Insertando valores del formulario dentro de los nuevos elementos creados
    fahrenheit.innerHTML = `${celsius}° C son el equivalente a ${toFahrenheit}° F `

    // Añadiendo elementos al contenedor
    container.appendChild(fahrenheit)
})