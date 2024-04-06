/*
Enunciado ejercicio 34:
Dado dos numeros, devolver los resultados de las operaciones basicas entre ellas (suma, resta, proudcto, division)

Ejemplos:
calculadora(5,5)


Devuelve  : la suma es: 10
la resta es: 0
la multiplicacion es: 25
la division es: 1



Como hacerlo:
-Function con dos parametros
- Template string y operaciones
- devolver el resultado

*/


function calculadora(numero1, numero2) {
    let resultado = `
    la suma es: ${numero1 + numero2}
    la resta es: ${numero1 - numero2}
    la multiplicacion es: ${numero1 * numero2}
    la division es: ${numero1 / numero2}
    `

    return resultado;
}


console.log(calculadora(10, 10));

