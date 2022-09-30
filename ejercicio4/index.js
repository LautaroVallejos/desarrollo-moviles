// const quantityKM = null;
// const consumption = null;
// const gasPrice = null;

function GastoCombustible(quantityKM, consumption, gasPrice){
    let distancia = quantityKM / consumption;
    let result = distancia * gasPrice;

    return result;
}

function GastoEstadia(quantityP, nightCost, quantityTravel){
    result = (quantityP * nightCost) * quantityTravel;

    return result;
}

const form = document.getElementById('form').addEventListener('submit', function (e) {
    console.log("testing")
    // Obteniendo valores del formulario
    const target = document.getElementById('target').value
    const quantityP = Number(document.getElementById('quantityP').value)
    const quantityKM = Number(document.getElementById('quantityKM').value)
    const gasPrice = Number(document.getElementById('gasPrice').value)
    const consumption = Number(document.getElementById('consumption').value)
    const nightCost = Number(document.getElementById('nightCost').value)
    const quantityTravel = Number(document.getElementById('quantityTravel').value)


    // Previene el evento de carga
    e.preventDefault();

    // Creando elementos
    const container = document.querySelector('.display');
    
    const destino = document.createElement('h3');
    const cantPersonas = document.createElement('h3');
    const cantKM = document.createElement('h3');
    const precioNafta = document.createElement('h3');
    const consumoNafta = document.createElement('h3');
    const precioXNoche = document.createElement('h3');
    const diasDeViaje = document.createElement('h3');
    const gastoCombustible = document.createElement('h2');
    const gastoEstadia = document.createElement('h2');
    
    // Insertando valores del formulario dentro de los nuevos elementos creados
    destino.innerHTML = `Destino: ${target}`
    cantPersonas.innerHTML = `Cantidad de Personas: ${quantityP}`
    cantKM.innerHTML = `Distancia en KM: ${quantityKM}`
    precioNafta.innerHTML = `Precio de la Nafta: ${gasPrice}`
    precioXNoche.innerHTML = `Precio por noche (x persona): ${nightCost}`
    diasDeViaje.innerHTML = `Dias de Viaje: ${quantityTravel}`

    let combustibles = GastoCombustible(quantityKM, consumption, gasPrice);
    let estadias = GastoEstadia(quantityP, nightCost, quantityTravel);

    gastoCombustible.innerHTML = `Gasto en Combustibles: $` + combustibles
    gastoEstadia.innerHTML = `Gasto en Estadia: $` + estadias

    // Añadiendo elementos al contenedor
    container.appendChild(destino)
    container.appendChild(cantPersonas)
    container.appendChild(cantKM)
    container.appendChild(precioNafta)
    container.appendChild(consumoNafta)
    container.appendChild(precioXNoche)
    container.appendChild(diasDeViaje)
    container.appendChild(gastoCombustible)
    container.appendChild(gastoEstadia)
});