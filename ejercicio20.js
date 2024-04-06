/*

Enunciado Ejercicio 20:
Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.

Una cadena es un anagrama de otra si usa los mismo caracteres en la misma cantidad.


No tener en cuenta espacios, simbolos raros, puntos, etc

Ejemplos:

anagramas('Riesgo', 'Sergio') // Devuelve: true
anagrama('Victor', 'Robles') // Devuelve: false


Como hacerlo: 
- Crear una funcion para limpiar los textos
- Quitar todo lo que no sea texto
- Poner en minusculas
- Crear array de letras
- Ordenarlo
- Unirlo
- Funcion para comparar las dos palabras

*/


function limpiarTexto(texto) {
    return texto
        .replace(/[^\w]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagramas(texto1, texto2) {
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("Victor !!! -,.", "Riesgo!!!!"));