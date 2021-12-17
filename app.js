/*Ejercicios con condicionales (parte 1):

12 - Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto.
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).
13 - Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
*/

//------------------------------------------------------------------------------------------------------------------------------
// 1 - Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, 
// que muestre un mensaje de error. 
// 5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. 
// mostrar por alert los tres resultados.

// 1mt = 39.37 pulgadas
// 1mt = 3.28 pies
// 1mt = 100cm

// function metroAImperial() {
//     let numero = prompt("ingresa numero a convertir");
//     if (!isNaN(numero)) {
//         let pie = numero * 1 * 3.281;
//         let cent = numero * 1 * 100;
//         let pulgada = numero * 1 * 39.37;
//         alert("pie = " + pie + " , en centimetros = " + cent + " , en pulgada = " + pulgada);
//     } else {
//         alert("Error, no ingresó un número");
//     }
// }
// metroAImperial();
//------------------------------------------------------------------------------------------------------------------------------

// 2 -Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .


// let edad = prompt("¿Qué edad tenes?");

// if(edad >= 18 && edad <= 21){
//     alert("Sos mayor de edad y naciste a partir del año 2000");
//  } else if (edad > 21){
//     alert("Sos mayor de edad y naciste antes del año 2000");
// } else {
//     alert("Sos menor de edad");
// }

//------------------------------------------------------------------------------------------------------------------------------
// 3 -Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. 
// Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. 
// En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// let sabor = prompt("Ingrese sus sabores de helado");

// let cobertura = prompt("¿Quierés cobertura de chocolate? (SI/NO");

// if (cobertura == "si") {
//     alert("Su helado sabor " + sabor + " con cobertura de chocolate cuesta $180");
// } else {
//     alert("Su helado sabor " + sabor + " sin cobertura de chocolate cuesta $150");
// }

//------------------------------------------------------------------------------------------------------------------------------
// 4 -Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos.
// Informar al usuario si el número resultante es par o impar.
// 1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

// let primerNumero = prompt("Ingrese un número");

// let segundoNumero = prompt("Ingrese otro número");

// let resultado;

// resultado = parseInt(primerNumero) + parseInt(segundoNumero);

// let impar = resultado%2;
// let condicion;
// if (impar !=0){
//     condicion = "impar";
// } else {
//     condicion = "par";
// }

// alert("La suma de los dos números es igual a " + resultado + " y es un número " + condicion);
//------------------------------------------------------------------------------------------------------------------------------
// 5 - Solicitar al usuario un número e indicar si es positivo, negativo o cero.

// let numero = prompt("Ingrese un número");

// if (numero < 0) {
//     alert("el numero que ingreso es negativo");
// } else if (numero == 0) {
//     alert("El numero es 0");
// } else if (numero > 0) {
//     alert("El numero es positivo");
// }

//------------------------------------------------------------------------------------------------------------------------------
// 6 - Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
// let monto = parseFloat(prompt("Ingrese un monto"));

// if (monto > 2000) {
//     monto = monto - ((2000 * 10) / 100);
//     alert("El total a pagar es " + monto + " con el descuento aplicado");
// } else {
//     alert("El monto es " + monto);
// }

//------------------------------------------------------------------------------------------------------------------------------
// 7 - Solicitar al usuario que ingrese una cadena de texto y luego una posición. 
// Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)
// let palabra = prompt("Ingrese una frase");
// let posicion = parseInt(prompt("Ingrese una posición (en números)"));
// switch (palabra[posicion-1]) {
//     case "a":
//         alert("La letra es vocal")

//         break;
//     case "e":
//         alert("La letra es vocal")

//         break;
//     case "i":
//         alert("La letra es vocal")

//         break;
//     case "o":
//         alert("La letra es vocal")

//         break;
//     case "u":
//         alert("La letra es vocal")

//         break;

//     default:
//         alert("El caracter no es una vocal");
//         break;
// }
//------------------------------------------------------------------------------------------------------------------------------
// 8 - Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, 
// si está entre 4 y 5 responder: 
// Reprobado , y 6 o más aprobado.

// let nota = parseFloat(prompt("Ingrese una nota"));

// if (nota <= 3) {
//     alert("Aplazado");
// } else if (nota > 3 && nota <= 5) {
//     alert("Reprobado");
// } else {
//     alert("Aprobado");
// }
//------------------------------------------------------------------------------------------------------------------------------
// 9 - Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
// let numero1 = parseInt(prompt("Ingrese un número"));
// let numero2 = parseInt(prompt("ingrese otro número"));

// if (numero1 == numero2) {
//     alert("Los números son iguales");
// } else if (numero1 > numero2) {
//     alert("El numero " + numero1 + " es mayor que " + numero2);
// } else {
//     alert("El numero " + numero2 + " es mayor que " + numero1);
// }
//------------------------------------------------------------------------------------------------------------------------------
// 10 - Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
// let mes = parseInt(prompt("Indique un mes (del 1 al 12)"));

// switch (mes) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert("Tiene 31 días");
//         break;
//     case 2:
//         alert("Tiene 28/29 días");
//     default:
//         alert("Tiene 30 días");
//         break;
// }

// 11 - Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.


let a = prompt("Ingrese un numero ; ")
let b = prompt("Ingrese un numero ; ")
let c = prompt("Ingrese un numero ; ")


if (a > b) {
    alert("Numero 1 es mayor")
} else if (b > c) {
    alert("Numero 2 es mayor")
} else {
    alert("Numero 3 es mayor")
}
