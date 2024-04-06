

// Cuanto es el X por ciento de X numero?

// Como hacerlo: 
// Funcion con parametros 'porciento y "numero"
// Crear una variable para la operacion del porcentaje
// devolver string que responda a la pregunta del porcentaje

function tantoPorCiento(porcentaje, numero) {
    let operacion = (numero * (porcentaje / 100));
    let resultado = `el ${porcentaje}% de ${numero} es ${operacion}`;

    return resultado;
}


console.log(
    tantoPorCiento(43, 897))