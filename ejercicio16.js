/*

Enunciado Ejercicio 16:
Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiene.

Ejemplos:
vacales("victorrobleswes.es") // devuelve: 6


Como hacerlo:

- Crear una funcion que reciba el texto
- Metodo match con expresion regular
- Devolver resultado


*/


function vocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;
}


console.log("El numero de vocales es:", vocales("jjajjjj"));