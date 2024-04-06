/*

Enunciado Ejercicio 14:

Dado un string y un numero, repetir el string tantas veces como el numero indique.



Ejemplo:
repiteme("Victor". 2)

Devuelve:
Victorvictor

Como hacerlo:
- Crear una funcion que reciba los dos parametros
- Bucle hasta el numero
- Concatenador string


*/


//Funcion clasica
function repiteme(texto, numero_repeticiones) {
    let resultado = "";


    for (let i = 0; i < numero_repeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}


console.log(repiteme("Baylis", 9))



//Funcion prototipo
String.prototype.repiteme = function repiteme(numero_repeticiones) {
    let resultado = "";

    for (let i = 0; i < numero_repeticiones; i++) {
        resultado += this;
    }

    return resultado;
}


console.log("victor robles web ".repiteme(5))

