/*
Enunciado Ejercicio 50:

Dado un numero devolver cuantos bucles tiene.
Un numero tiene un bucle cuando tiene un circulo cerrado cuando lo dibujas, por lo que 6 tiene un bucle,
1 no tiene bucle y 8 tiene dos bucles.

0, 6, 8, 9


Ejemplos:
bucles(28861)


Devuelve: 5

*/

function bucles(numero) {
    let arrayNumeros = numero.toString().split('');

    let bucles = 0;

    for (let numero of arrayNumeros) {
        numero = parseInt(numero);

        if (numero === 0 || numero === 6 || numero === 9) {
            bucles++;
        } else if (numero === 8) {
            bucles += 2;
        }
    }

    return bucles;

}

console.log(bucles(28861));