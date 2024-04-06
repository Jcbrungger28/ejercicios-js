/*
Enunciado Ejercicio 46:
Dado un string, devolver todos los posibles susbstrings


Ejemplos:
todasSubstring("Hola")


[

'h', 'o', 'l',
'a', 'ho', 'ol',
'la', 'hol', 'ola',
'hola'

]

*/


function todosSubStrings(palabra) {

    let susbstrings = [];

    for (letra in palabra) {
        let comienzo = parseInt(letra);

        for (let i = 0; i <= palabra.length - comienzo; i++) {
            let final = parseInt(i) + parseInt(comienzo);

            susbstrings.push(palabra.substring(comienzo, final));
        }
    }
    return susbstrings.filter(elemento => elemento.length >= 1);
}


console.log(todosSubStrings("victorroblesweb.es"));


