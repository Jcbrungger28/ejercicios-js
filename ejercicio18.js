/*

Enunciado Ejercicio 18:
Dado un numero, mostrar todos sus numeros divisores.

Ejemplos:
mostrarDvisores(5); 

Devuelve
1
5

Como hacerlo: 
 - Crear una funcion que comprueba si un numero es divisor de otro.
 - Crear funcion para recorrer y mostrar.
*/

function divisor(numero, posible_divisor) {
    if (numero % posible_divisor === 0) {
        return posible_divisor;
    }

    return 0;
}

function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        let esDivisor = divisor(numero, i);

        if (esDivisor) {
            console.log(esDivisor);
        }
    }
}


mostrarDivisores(20);


