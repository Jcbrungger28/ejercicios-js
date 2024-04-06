/*

Enunciado Ejercicio 51:
Dado un array de numeros, devolver un array nuevo con los numeros pares e impares separados.


Ejemplos:
pares([1,2,3,4])

Devuelve: {
    pares: [2,4]
    impares: [1,3]
}

*/

function pares(numeros) {
    return {
        pares: numeros.filter(num => num % 2 === 0),
        impares: numeros.filter(num => num % 2 !== 0)
    }
}

console.log(pares([1, 2, 3, 4, 6, 7, 8100, 753]))