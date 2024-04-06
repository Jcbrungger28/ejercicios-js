/*
Enunciado Ejercicio 27:
Dado un numero, mostrar a cuantos años, meses y dias, equivalen.


Ejemplos:
calcularDias(920);

Equivale a 2 años, 6 meses y 10 dias.

Como hacerlo:

- crear un function con parametros dias
- Divisiones para sacar años, meses y dias

*/


function calcularDias(dias) {
    let anios = Math.floor(dias / 365);
    let dias_restantes = (dias % 365);
    let meses = Math.floor(dias_restantes / 30);
    dias_restantes = dias_restantes % 30;

    return `Equivale a ${anios} años, ${meses} meses y ${dias_restantes} dias`;
}


console.log(calcularDias(920));