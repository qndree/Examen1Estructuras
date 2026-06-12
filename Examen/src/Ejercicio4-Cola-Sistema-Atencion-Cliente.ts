/**
 * Ejercicio 4 - Cola sistema de atencion al cliente
 */

// Interface

interface ICola<T> {
    encolar(elemento: T): void;
    desencolar(): T | undefined;
    frente(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

// Implementacion

class ColaArreglo<T> implements ICola<T> {
    private elementos: T[] = [];

    encolar(elemento: T): void {
        this.elementos.push(elemento);
    }

    desencolar(): T | undefined {
        if (this.estaVacia() == true) {
            return undefined;
        } else {
            let atendido = this.elementos.shift();
            return atendido;
        }
    }

    frente(): T | undefined {
        if (this.estaVacia() == true) {
            return undefined;
        }
        return this.elementos[0];
    }

    tamaño(): number {
        let tam = this.elementos.length;
        return tam;
    }

    estaVacia(): boolean {
        if (this.elementos.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}

// Prueba

let cajaFerreteria = new ColaArreglo<string>();

cajaFerreteria.encolar('Jose');
cajaFerreteria.encolar('Maria');
cajaFerreteria.encolar('Pedro');
cajaFerreteria.encolar('Ana');
cajaFerreteria.encolar('Carlos');

console.log('Al frente de la fila:', cajaFerreteria.frente());

let cliente1 = cajaFerreteria.desencolar();
console.log('Atendiendo a:', cliente1);

let cliente2 = cajaFerreteria.desencolar();
console.log('Atendiendo a:', cliente2);

let cliente3 = cajaFerreteria.desencolar();
console.log('Atendiendo a:', cliente3);

console.log('Clientes esperando:', cajaFerreteria.tamaño());