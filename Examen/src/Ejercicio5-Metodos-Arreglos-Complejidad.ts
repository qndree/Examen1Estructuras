/**
 * Ejercicio 5 - Métodos de arreglos y análisis de complejidad
 */

interface Venta {
    id: number;
    producto: string;
    monto: number;
    categoria: string;
    pagado: boolean;
}

const ventas: Venta[] = [
{ id:1, producto:"Martillo", monto:120.00,
categoria:"Herramienta", pagado:true },
{ id:2, producto:"Cable 10m", monto:85.50,
categoria:"Electrico", pagado:false },
{ id:3, producto:"Llave inglesa", monto:95.00,
categoria:"Herramienta", pagado:true },
{ id:4, producto:"Tubo PVC 1/2", monto:32.00,
categoria:"Plomeria", pagado:true },
{ id:5, producto:"Taladro", monto:450.00,
categoria:"Electrico", pagado:false },
{ id:6, producto:"Cemento 50kg", monto:210.00,
categoria:"Material", pagado:true },
{ id:7, producto:"Sierra circular", monto:380.00,
categoria:"Herramienta", pagado:true },
{ id:8, producto:"Cinta métrica", monto:55.00,
categoria:"Herramienta", pagado:false },
];

// filter
let ventasPagadas = ventas.filter(venta => venta.pagado == true); // Complejidad O(n) porque debe recorrer todos los n elementos del arreglo una vez para aplicar la condicion
console.log('Ventas pagadas:', ventasPagadas);

// map
let nombresProductos: string[] = ventas.map(venta => venta.producto); // Complejidad O(n) porque debe recorrer todos los n elementos del arreglo una vez para extraer el nombre del producto
console.log('Nombres productos:', nombresProductos);

// reduce
let totalVentas: number = ventas.reduce((acumulador, venta) => acumulador + venta.monto, 0); // Complejidad O(n) porque debe recorrer todos los n elementos del arreglo una vez para sumar los montos
console.log('Total en ventas:', totalVentas);

// Encadenado 
let totalHerramientas: number = ventas // Complejidad O(n) para el filter, donde n es el número total de ventas. Luego, el reduce se ejecuta sobre K elementos ( lasventas filtradas), con complejidad O(K)
    .reduce((acumulador, venta) => acumulador + venta.monto, 0);
console.log('Total herramientas:', totalHerramientas);


// sort
// Ordenar arreglo por monto mayor a menor y mapear la salida
ventas.sort((a, b) => b.monto - a.monto); // Complejidad O(n log n) para ordenar el arreglo, y el map se ejecuta sobre n elementos, con complejidad O(n)

ventas.map(venta => {
    console.log(`${venta.producto}: L.${venta.monto}`);
});