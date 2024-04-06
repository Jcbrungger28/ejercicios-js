/*

Enunciado Ejercico 25:

Dado un string, ponerlo completo en mayusculas o minusculas dependiendo de si hay mas mayusculas o minusculas por defecto en el string.
Si hay mas mayusculas ponerlo en mayus
Si hya mas minusculas ponerlo en minus.


Como hacerlo:
- Crear una funcion con parametros texto.
-Crear dos contadpres para mayus y minus.
-Recorrer el texto y comprobar si las letras que vamos a recorriendo son mayus


Ejemplos:
mayusMinus("JOAQuin") // Devuelve: JOAQUIN
mayusMinus("Victor") // Devuelve: victor


*/

function mayusMinus(texto) {

    let resultado = "";
    let mayus = 0;
    let minus = 0;


    for (let letra of texto) {
        if (/[A-Z]/.test(letra)) {
            mayus++
        } else {
            minus++
        }

    }

    if (mayus > minus) {
        resultado = texto.toUpperCase();
    } else {
        resultado = texto.toLowerCase();
    }

    return resultado;
}


console.log(mayusMinus("Baylis BRUNGGER"));

