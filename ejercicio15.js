/*

Enunciado Ejercicio 15:
Dada una cadena de texto, devolver el caracter mas usado.

Ejemplo:
masUsado("victorrobleswed.es")


Devuelve
lo que mas se repite es: e


Como hacerlo:
- Crear una funcion que reciba el texto
- Mapear letras en un json
- Recorremos el mapeo
- Hacemos condiciones para ver que contador es mayor

*/

function masUsado(texto) {
    let mapeo_letras = {};
    let max_repeticiones = 0;
    let letra_mas_repetida = "";

    for (let letra of texto) {
        if (!mapeo_letras[letra]) {
            mapeo_letras[letra] = 1;
        } else {
            mapeo_letras[letra]++;
        }
    }

    for (let letra in mapeo_letras) {
        if (mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > max_repeticiones) {
            max_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }
    console.log(mapeo_letras);
    return letra_mas_repetida;
}

console.log("La letra mas repetida es:", masUsado("Baylis Brigitte Brungger Rodriguez"));