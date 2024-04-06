/*
Enunciado:
Dado un array de string, devolver otro con los valores que esten formados por mas de dos palabras.


ejemplos:
dosPalabras(["Hola", "san francisco", "ciudad real", "victor"]);

Devuelve
["san fransisco, "ciudad real"]


*/
function dosPalabras(elementos) {
    let nuevos_elementos = [];

    for (palabra of elementos) {
        if (palabra.split(' ').length >= 2) {
            nuevos_elementos.push(palabra);
        }
    }

    return nuevos_elementos;
}


console.log(dosPalabras(["Hola", "san francisco", "ciudad real", "victor"]));