// 1. Solicitar un  numero y si es mayor a 10 imprimir el numero que es mayor
let num = Number(prompt("Ingrese un numero"));

if(num >= 10){
    alert("El numero es mayor a 10");
} else {
    alert("El numero es menor a 10");
}

// 2. Solicitar una edad y mostrar por pantalla si es mayor o menor legalmente
let age = Number(prompt("Ingrese su edad"))

if(age >= 18){
    alert("Usted es mayor de edad!!")
} else {
    alert("Usted es menor de edad")
}

// 3. Prompt 2 numero y mostrar el mayor y el menor
let num1 = Number(prompt("Ingrese su primer numero"))
let num2 = Number(prompt("Ingrese su segundo numero"))

if(num1 > num2){
    alert(`El numero ${num1} es mayor que ${num2}`);
} else {
    alert(`El numero ${num2} es mayor que ${num1}`);
}

// 4. Ordenar 3 numeros de mayor a menor
let numA = Number(prompt("Ingrese el primer numero"));
let numB = Number(prompt("Ingrese el segundo numero"));
let numC = Number(prompt("Ingrese el tercer numero"));

alert("Datos mostrados en la consola")

if(numA > numB && numA > numC){
    console.log(`Numero mayor: ${numA}`)
    if(numB > numC){
        console.log(`Numero intermedio: ${numB}`)
        console.log(`Numero menor: ${numC}`)
    } else {
        console.log(`Numero intermedio: ${numC}`)
        console.log(`Numero menor: ${numB}`)
    }
}

if(numB > numA && numB > numC){
    console.log(`Numero mayor: ${numB}`)
    if(numA > numC){
        console.log(`Numero intermedio: ${numA}`)
        console.log(`Numero menor: ${numC}`)
    } else {
        console.log(`Numero intermedio: ${numC}`)
        console.log(`Numero menor: ${numA}`)
    }
}

if(numC > numB && numC > numA){
    console.log(`Numero mayor: ${numC}`)
    if(numA > numB){
        console.log(`Numero intermedio: ${numA}`)
        console.log(`Numero menor: ${numB}`)
    } else {
        console.log(`Numero intermedio: ${numB}`)
        console.log(`Numero menor: ${numA}`)
    }
}

// 5. Ingresar un numero y definir si es positivo o negativo
let number = Number(prompt("Ingrese un numero positivo o negativo"));

if(number > 0){
    alert(`El numero ingresado es positivo`);
} else {
    alert(`El numero ingresado es negativo`);
}

// 6. Ingresar un numero y mostrar si es par o impar

let numerito = Number(prompt("Ingrese un numero:"));

if(numerito % 2 === 0){
    alert(`El numero ${numerito} es par`);
} else {
    alert(`El numero ${numerito} es impar`);
}