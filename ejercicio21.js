/*

Enunciado Ejercicio 21:
Dada una cadena de texto y un numero, recortar el string mostrando los X primero caracteres.


Ejemplos:
recortar("Cursos desarrollo web", 6); // Devuelve: "Cursos"

Como hacerlo:

- Crear una function con parametros texto y hasta
- Comprobar que los datos son correctos
- recortar String con substr
- Devolver el resultado


*/


function recortar(texto, hasta) {
    let resultado = " ";

    // console.log(typeof texto, typeof hasta);

    if (typeof texto === "string" && typeof hasta === "number") {
        resultado = texto.substring(0, hasta);
    } else {
        resultado = "Introduce bien los datos !!!"
    }

    return resultado;
}

console.log(recortar("Cursos Desarrolo Wed Victor Robles", 10));