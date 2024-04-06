/*
Enuciado: Ejercico 29

Dado un numero indicar si un numero capicua o no. 
Los numeros capicua se leen igual de izquierda a derehca y viceverza



Ejemplos:
capi(2002); //Devuelve: true
capi(2014); //devuelve : false

Como hacerlo:

- crear una funcion con parametro numero
- Convertir a string
- converir numero en array de numeros
- Darle  la vuelta
- Unirlo y convertirlo a entero.

*/


function capi(numero) {
    let procesado = parseInt(numero.toString().split('').reverse().join(''));

    return numero === procesado;

}

console.log(capi(3003));
