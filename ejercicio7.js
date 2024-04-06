// Dados los numero devolver cuantos numero impares hay entre ellos


// Como hacerlo:
// - Function que reciba los dos numeros
// - Bluce de numero1 al numero2
// - Condicion, si el resto es distinto a createContext, es Impar
// - Aumentar en uno el contador
// - Devolver contador


function impares(numero1, numero2) {

    let contador = 0;

    while (numero1 < numero2) {

        if (numero1 % 2 !== 0) contador++;

        numero1++;
    }

    return contador;
}

console.log("numeros impares:", impares(1, 100));