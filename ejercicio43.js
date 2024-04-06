/*
Enunciado Ejercico 43:
Dado un array de numeros, sacar la media de todos ellos.

Ejemplos:
laMedia([1,2,3]);

devuelve:
3

*/


function laMedia(numeros) {
    let suma = numeros.reduce((valorAcumulador, numeroActual) => {
        return valorAcumulador + numeroActual;
    });

    let media = suma / numeros.length;

    return media;
}

console.log(laMedia([1, 2, 3, 4, 5, 6, 20, 50]));