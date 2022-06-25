/**
 * Consignas
 * 1) Realizar una estructura basica de html, linkear un css y tambien un script de js llamado ejercicio1.js.
 * 2) Que se muestra por pantalla "Hola mundo" mediante el archivo js.
 * 3) Declarar let a y b, inicializar ambos valores y mostrar por medio de la variable resultado la suma de a y b en pantalla.
 * 4) Declarar let num1 y num2, sumarle +1 y +5 respectivamente y mostrar por pantalla los resultados.
 * 5) Declarar dos numeros, mostrar por pantalla el contenido de ambas variables y el resultardo de la multiplicacion.
 * 6) Solicitar al usuario que ingrese el valor de un numero por teclado. Utilizar prompt y almacenar dentro de la variable num, luego postrarlo por pantalla.
 */

// 1. [Compleado]

// 2. [Completado] 
document.write("<h1>Hello World!</h1>");

// 3. [Completado]
let a, b, res;
a = 25
b = 5
res = a + b;

document.write(`La suma de A + B es: ${res}` + "<br>");

// 4. [Completado]
let num1 = 2;
let num2 = 10;

num1 += 1;
num2 += 5;

document.write(`Numero 1 es: ${num1}` + "<br>");
document.write(`Numero 2 es: ${num2}` + "<br>");

// 5. [Completado]
let Num1 = 5;
let Num2 = 10;

let multip = Num1 * Num2;

document.write(`El resultado de la multiplicacion es: ${multip}` + "<br>");

// 6. [Completado]
let input = prompt("Ingrese un mensaje:");
alert(`El mensaje que ha sido ingresado es: ${input}`);
