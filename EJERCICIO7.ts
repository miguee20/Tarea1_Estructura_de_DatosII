function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;  // factorial de 0 o 1 es 1
    } else {
        return n * factorial(n - 1); 
    }
}
let numero: number = 5;
console.log(`El factorial de ${numero} es:`, factorial(numero));

numero = 7;
console.log(`El factorial de ${numero} es:`, factorial(numero));
