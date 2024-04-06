/*
Enunciado Ejercicio 31:
Dado un numero, indicar que tipo de angulo es.


Ejemplos:
console.log(angulo(47))
console.log(angulos(90))
console.log(angulo(145))
console.log(angulos(180))



Ejemplos:

Angulo agudo
Angulo Recto
Angulo Obstuso
Angulo llano


Como hacerlo:
- crear un function con parametro angulo
- Condiciones para detectar el angulo
- devolver resultado

*/

function angulo(abertura) {
    let resultado = "Angulo Completo";
    if (abertura < 90) {
        resultado = "Angulo Agudo"
    } else if (abertura === 90) {
        resultado = "Angulo Recto";
    } else if (abertura > 90 && abertura < 180) {
        resultado = "Angulo Obstuso"
    } else if (abertura === 180) {
        resultado = "Angulo Llano";
    } else if (abertura > 180 && abertura < 360) {
        resultado = "Angulo concavo";
    }

    return resultado;
}


console.log(angulo(361));