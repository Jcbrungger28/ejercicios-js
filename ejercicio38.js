/*

Enunciado Ejercicio 38:


Dado un numero, mostrar listado de los cuadrados de todos los numeros naturales hasta llegar al mismo.

Como hacerlo:
- Dos funciones
- Hacer bucle del cero al numero
- Sacar el cuadrado y mostrar

*/


function cuadrado(numero) {
    return numero * numero;
}


function mostrar(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(cuadrado(i))
    }
}

mostrar(78);

