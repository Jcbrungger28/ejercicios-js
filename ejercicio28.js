/*
Eunnciado Ejercico 28:
Dado un numero, devolver su factorial.

El factorial de un numero es la multiplicacion de todos los numeros hasta llegar a el.


Ejemplos:
Factorial(3); // Devuelve: 6


Como hacerlo:
- Crear una funcion con parametro numero
- Bucle del 1 al numero
- Multiplicar el numero anterior con el actual

*/


function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}


console.log("El factorial es de:", factorial(3));