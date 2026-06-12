/**
 * Ejercicio 1 - Tuplas
 */

// Enums

enum CategoriProducto {
    Herramienta = 1,
    Material,
    Electrico,
    Plomeria
}

// Tupla de registro

let codigoProducto: number = 1001;
let nombreProducto: string = 'Martillo de Acero';
let categoria: CategoriProducto = CategoriProducto.Herramienta;
let precioUnitario: number = 250.50;
let enStock: boolean = true;

// Tuplas 

type RegistroProducto = [number, string, CategoriProducto, number, boolean];

let producto1: RegistroProducto;

producto1 = [1002, 'Pulidora', CategoriProducto.Electrico, 1500.00, true];

let [, nombre, , precio, ] = producto1;

console.log(nombre);
console.log(precio);