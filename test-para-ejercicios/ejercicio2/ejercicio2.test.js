const palindromo = require("./ejercicio2");

test("Comprobar si la funcion palindromo esta definida", () => {
    expect(palindromo).toBeDefined();
});


test("Es un palindromo", () => {
    expect(palindromo("otto")).toEqual(true);
})

test("No es un palindromo", () => {
    expect(palindromo("baylis")).toBe(false)
})