/*
Enuciado Ejercicio 36:
Dado un texto, devolver cuantas consonantes y cuantas vocales tiene


Ejemplos:
cuentaLetras("vic
torrobles.es");


Devuelve:
Consonantes: 5
Vocales: 6


Como hacerlo:
- Function con parametro texto
- Recorrer cada leta
- Testear con expresion regular

*/


function cuentaLetras(texto) {
    let consonates = 0;
    vocales = 0, texto_limpio = "";


    texto_limpio = texto.split("").filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join("");

    for (let letra of texto_limpio) {
        if (/[áéíóúaeiou]/gi.test(letra)) {
            vocales++;
        } else {
            consonates++;
        }
    }

    return [consonates, vocales];
}


let letras = cuentaLetras("victorroblesweb.es");

console.log("Consonantes:", letras[0]);
console.log("Vocales:", letras[1]);