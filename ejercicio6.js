


// Dibujar un cuadrado hueco con asteriscos.

/*
Como hacerlo: 

- funcion para crear el lado de arriba y abajo del cuadrado
-Funcion que haga los lados y el hueco del cuadrado
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el asterisco de izq y derc.
- Ir concatenando en una variable cada linea del cuadrado.
-mostrar el cuadrado

 */

function lado(numero) {
    let lado = '';

    for (let i = 0; i < numero; i++) {
        lado += '*';
    }

    return lado;
}

function cuadrado(numero) {
    // lado de arriba
    let dibujo = lado(numero) + '\n';

    let contenido = '';

    // filas
    for (let i = 2; i < numero; i++) {
        contenido = '*';

        // contenido hueco
        for (let x = 0; x < (numero - 2); x++) {
            contenido += ' '
        }

        contenido += '*';

        // añadir filas a dibujos
        dibujo += contenido + '\n';
    }

    // lado de abajo
    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(20))










