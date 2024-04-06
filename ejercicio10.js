/*


Enunciado Ejercicio 10:
Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera.



Ejemplos:
escalera(4) //Devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]


Como hacerlo: 

- Funcion que reciba un numero
- Recorrer el numero de niveles de la escalera
- En cada iteracion pintar los escalones de ese nivel
- Haciendo un bucle desde 1 hasta el nivel en el que estamos


*/


function escalera(numero) {
    let escalera_completa = "";

    for (let nivel = 1; nivel <= numero; nivel++) {

        let escalones = "";

        for (let escalon = 1; escalon <= nivel; escalon++) {
            escalones += "[-]"
        }

        escalera_completa += escalones + '\n';
    }

    return escalera_completa;

}

console.log(escalera(7));