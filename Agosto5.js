// Tarea del 5 de Agosto del 2022

/*
    Utilizando un bucle, mostrar la suma y el promedio de los
    números introducidos hasta introducir un numero negativo
    y mostrar el resultado.

    3) Mostrar todos los números impares que hay entre dos números
    introducidos por el usuario.

    4) Tabla de multiplicar de un numero introducido por pantalla.

    5) Calculadora: que pida dos números por pantalla,
    en una alerta y por la consola el resultado de sumar
    restar multiplicar y dividir esas dos cifras.

    8) Ordenar el array ( con strings ) y mostrarlo.

    9) Invertir el orden del array y mostrarlo.
*/


alert("###### Conjunto de Numeros ######")
let suma, promedio;
let contador = 0;
let input = 0;
let par = 0;
let impar = 0;

do {
    input = Number(prompt("Ingrese una serie de numeros, para salir coloque uno negativo"));
    
    if(input > 0){
        suma += input;
        contador++;
        
        if(input % 2 == 0){
            par++;
        } else {
            impar++;
        }
    }

} while (input>0);

promedio = suma/contador;

console.log(`La Suma total de todos los numeros es: ${suma}`)
console.log(`El Promedio del total es: ${promedio}`)
console.log(`Los numeros Pares son: ${par}`)
console.log(`Los numeros impares son: ${impar}`)


alert("###### Tabla de Multiplicar ######")
let multiplicador = Number(prompt("Ingrese numero para saber su tabla (primeros 10 calculos)"))
for(let counter = 0; counter<multiplicador; counter++){
    numero = multiplicador * counter
    console.log(`${multiplicador} X ${counter} es: ${numero}`)
}


alert("###### Calculadora ######")
let numA = Number(prompt("Ingrese su primer numero"))
let numB = Number(prompt("Ingrese su primer numero"))


console.log(`La suma de ${numA} y ${numB} es: ` + (numA+numB))
console.log(`La resta de ${numA} y ${numB} es: ` + (numA-numB))
console.log(`La multiplicacion de ${numA} y ${numB} es: ` + (numA*numB))
console.log(`La division de ${numA} y ${numB} es: ` + (numA/numB))

alert("###### Manipulacion de Arrays ######")
let nombres = ["Andres", "Milagros", "Martin", "Victoria", "Santiago", "Rodrigo", "Ana"]
console.log(nombres)

nombres.sort() // Ordena Alfabeticamente los nombres

console.log("Nombres Ordenados: ")
nombres.map(nombre => console.log(nombre))

nombres.reverse() //Invierte el orden de los nombres

console.log("Nombres Invertidos: ")
nombres.map(nombre => console.log(nombre))
