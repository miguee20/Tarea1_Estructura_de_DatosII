// Funcion para ver si la edad es mayor o igual a 18
function esMayorDeEdad(age: number): boolean {
    return age >= 18;
}
console.log("es mayor de edad (16)?", esMayorDeEdad(16));  // no
console.log("es mayor de edad (20)?", esMayorDeEdad(20));  // si
console.log("es mayor de edad (18)?", esMayorDeEdad(18));  // si
