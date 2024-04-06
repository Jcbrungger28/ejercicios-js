/*

Enunciado Ejercicio 23:
Dada una cadena de texto, poner en mayuscula la primera letra de cada palabra en la cadena y luego devolver la cadena.



Ejemplos:
enMayuscula("hola soy victor") // Devuelve: "Hola Soy Victor"


Como hacerlo:

- Crear una funcion con parametro texto
- Poner la primera letra del string en mayusculas
- Recorrer el string completo
- Devolver el resultado
- Si el caracter anterior a la letra actual es un espacio
- ponerlo en mayusculas
- Si el caracter no es un espacio añadirlo al resultado


*/


function enMayusculaOriginal(texto) {
    let resultado = "";
    for (letra in texto) {
        // console.log(typeof letra);

        if (parseInt(letra) === 0 || texto[letra - 1] == " ") {
            resultado += texto[letra].toUpperCase();
        } else {
            resultado += texto[letra];
        }
    }

    return resultado;
}


function enMayuscula(texto) {
    let palabras = [];

    for (let palabra of texto.split(" ")) {


        palabras.push(palabra[0].toUpperCase() + palabra.substring(1))
    }


    return palabras.join(' ');
}


console.log(enMayuscula("hola visita victorrobleswed"))