
/*

Enunciado Ejercico 17:

Dado un numero, mostrar los numeros de 1 hasta el numero.
Pero para multiplos de tres imprimir "buzz" en lugar del numero y para los multiplos de cinco imprimir "lightyear".
Para miltiplos de tres y cinco imprimen "buzzlightyear".


*/


function buzz(numero) {
    let resultado = '';

    if (numero % 3 === 0 && numero % 5 === 0) {
        resultado = "BuzzLightyear";

    } else if (numero % 3 === 0) {
        resultado = "buzz";
    } else if (numero % 5 === 0) {
        resultado = "lightyear";
    } else {
        return numero;
    }

    return resultado;
}

function imprimir(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(buzz(i))
    }
}

imprimir(20);