

// Dado una cadena de texto devolver el valor invertido sin usar metodos propios del lenguaje solo estructuras de control

// ejemplos:
// invertir("hola") // devuelve: 'olah'
// invertir('victor) //devuelve: 'rotciv'
// invertir('robles) // devuelve: "selbor"


//Hecho solo con estructura de control
function invertir(texto) {
    let invertido = '';

    for (let letra of texto) {
        invertido = letra + invertido;
    }

    return invertido;
}


//hecho con metodos del javascripts
function invertir(texto) {
    return texto.split('').reverse().join('');
}


console.log("Texto invertido:", invertir("baylisBrungger"))