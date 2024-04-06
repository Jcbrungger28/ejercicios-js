/*


Enunciado Ejercicio 24:

Dada un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.


En este caso una permutacion es una secuencia de numeros en orden sin que falte ninguno entre ellos.


Ejemplos:
permutacion([1,2,3,4,5], 5) // Devuelve: true
permutacion([1,2,3,5], 5) // Devuelve: false


Como hacerlo:
- Crear una funcion con parametros secuencia y numero
- Bucle del 0 a numero.
- Return false si el numero actual + 1, no se encuentra
- Si salimos del bucle, devolver true.

*/


function permutacion(secuencia, numero) {

    for (let i = 0; i < numero; i++) {
        if (secuencia.indexOf(i + 1) < 0) {
            return false;
        }
    }
    return true;
}


console.log(permutacion([1, 2, 3, 4, 5,], 5));