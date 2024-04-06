

// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella, la frase y la palabra debe ser parametros de una funcion

// ejemplos:
// coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra") //devuelve 2
//coincidencias("soy la frase", "victor") // devuelve 0






// Devolver el contador de la busqueda

// Funcion con dos parametros frase, busqueda
function coincidencias(frase, busqueda) {

    // poner string en minusculas y limpiarlo
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0;

    // Comprobar si la busqueda esta incluida en la frase
    if (texto_limpio.includes(busqueda)) {

        // Crear una array de palabras de la frase
        let palabras = texto_limpio.split(' ');


        // mapear esas palabras y hacer un contador de cada una
        let mapa = {};
        for (let palabra of palabras) {

            if (mapa[palabra]) {
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda]

    } else {
        resultado = 0;
    }
    return resultado;

}

console.log("Numero de coincidencias en la frase:",
    coincidencias("Hola, que tal, soy BAYLIS. baylis baylis", "baylis")
);