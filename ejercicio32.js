/*

Enunciado Ejercicio 32:
Dado un array de numeros, devolver el array con sus numeros elevados al cuadrado
(numero multiplicado por si mismo).

El array debe eliminar cualquier contenido que no sea numerico

Ejemplos:
alCuadrado([5,6,7])


Ejemplos: [25, 36, 49]

Como hacerlo:
- Crea una funcion con parametros numeros
- Filtrar array
- modificar contenido array
- devolver resultado

*/


function alCuadrado(numeros) {
    let numeros_cuadrados = numeros
        .filter(numero => typeof numero === "number")
        .map(numero => Math.pow(numero, 2))
    return numeros_cuadrados;
}


console.log(alCuadrado([12, 56, 77, "hola", true, ["hola"], 80]));