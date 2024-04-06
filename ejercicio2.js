// Dada una cadena de texto, comprobar si es un palindromo o no. los palindromos son palabras que se leer igual estando invertidas por ejemplo: ana, bob, otto, allivessevilla

// no tener en cuenta espacios o simbolos raros.

// palidromo("otto") // devuelve true
// palindromo('baylis') // devuelve false

function palindromo(texto) {
    let invertido = texto
        .split('')
        .reverse()
        .join('')


    return invertido === texto

}

console.log("¿ Es un palindromo? " + palindromo("allivessevilla"));