/*

Enunciado Ejercicio 11:

Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto [-CENSURADO-].

Si el texto y la busqueda estan vacios mostrar "No puedes leer el texto y la busqueda", en el caso de que ambos parametros no lleguen.

Ejemplos:
censurado("Hola Hola", "Hola") //Devuelve: [-CENSURADO-]  [-CENSURADO-]

censurado("Hola") //Devuelve: "No puedes hacer la busqueda"

Como hacer:
-Funcion que reciba texto y una busqueda
-Condiciones en el caso de que algun parametro de false
- Reemplazar la busqueda por [-CENSURADO-] en el texto


*/


function censurado(texto = false, busqueda = false) {

    let resultado = "";

    if (!texto && !busqueda) {
        resultado = "No puedes leer el texto y la busqueda"
    } else if (!texto && busqueda) {
        resultado = "No puedes leer el texto";
    } else if (texto && !busqueda) {
        resultado = "No puedes hacer la busqueda"
    } else if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
    }


    return resultado;

}


console.log(censurado("hola78 holajjuu holaaaaa", "hola"));