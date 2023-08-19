//Crear un arreglo y definir tamaño
let array= 3
//asignarle los valores
array = ["hola", 5, "jjj", 4]
//Mostrar arreglo
console.log(array)

//crear arreglos
let nombres = ["Juan", "María", "Pedro", "Ana"];
//let numeros = [1, 2, 3, 4, 5];

//acceder o imprimir elementos
console.log(nombres[0]); // Imprime "Juan"
//console.log(numeros[2]); // Imprime 3

//modificamos elementos
nombres[1] = "Carlos";
console.log(nombres); // Imprime ["Juan", "Carlos", "Pedro", "Ana"]

//Obtener el Tamaño del Arreglo:
let numeros = [2, 4, 6, 8, 10];
let cantidadNumeros = numeros.length;// Imprimirá la longitud del arreglo "numeros"

console.log("El tamaño del arreglo" + numeros + " es:", cantidadNumeros); // Imprime "El tamaño del arreglo es: 5"

//lenght es una propiedad
// metodo push(elemento): Agrega un elemento al final del arreglo.

//Agregar Elementos al Arreglo con Bucle:
const numElementos = prompt("Ingrese cuántos elementos desea agregar al arreglo:");
const elementos = [];

for (let i = 0; i < numElementos; i++) {
  const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
  elementos.push(elemento);
}

console.log(elementos);
