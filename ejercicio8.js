// Dado un numero, inviertelo y devuelve de nuevo el entero

// como hacerlo:
// - Funcion que reciba los un numero
// - conviertir numero en string
// - crear un array por cada letra
// - darle la vuelta
// - Unir el array en un string
// - Convierte el string en un entero   

function invertidoNumero(numero) {

    let invertido =
        parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);

    return invertido;
}

console.log(invertidoNumero(15));