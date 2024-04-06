/*

Enunciado Ejercicio 12:

Dado un numero mostrar todos los numeros desde ese al 0 e 8 en 8 un lista con guiones y cada numero debe empezar por n°

---Del 100 al 0 ---
- n°100
- n°92
- n°84
- n°76
- n°68
- n°60
- n°52
- n°44
- n°36
- n°28
- n°20
- n°12
- n°4

--FIN--


Como hacer:

-Funcion que reciba un numero
-Inicializar variable con encabezado
-Bucle del numero al cero
-Concatenar guion, n°, numero, y salto de linea
- Restar 8
- Concatenar FIN

*/


function hastaCero(numero) {

    let resultado = `--- Del ${numero} al 0 --- \n`;

    while (numero > 0) {
        resultado += `- n°${numero} \n`;
        numero -= 8;
    }

    if (numero <= 0) {
        resultado += "- n°0 \n"
    }

    resultado += "---FIN---";

    return resultado;
}


console.log(hastaCero(987));

