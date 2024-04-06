/*
Enunciado ejercicio 39:
Dado un texto, comprobar que sea un email valido,


Ejemplos:
comprobarEmail("victor@victor.com");


devuelve: true;


Como hacerlo:
- Expresion regular

*/


function comprobarEmail(email) {
    return /^\w+@\w+\.\w+$/gi.test(email);
}


console.log(comprobarEmail("jbrungger@gmail.com"));