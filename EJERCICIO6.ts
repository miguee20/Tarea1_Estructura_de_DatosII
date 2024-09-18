let numeros: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(`NUMERO EN LA POSICION ${i}:`, numeros[i]);
}

let sumaTotal: number = 0;

for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i]; 
}

console.log("SUMA TOTAL:", sumaTotal);
