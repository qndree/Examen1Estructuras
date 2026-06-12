/**
 * Ejercicio 3 - Pila historial de Navegacion
 */

// Interface

interface IPila<T> {
    apilar(elemento: T): void;
    desapilar(): T | undefined;
    tope(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

// Implementacion

class PilaArreglo<T> implements IPila<T> {
    private elementos: T[] = [];

    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }

    desapilar(): T | undefined {
        if (this.estaVacia() == true) {
            return undefined;
        } else {
            let aux = this.elementos.pop();
            return aux;
        }
    }

    tope(): T | undefined {
        if (this.estaVacia() == true) {
            return undefined;
        }
        let ultimoIndice = this.elementos.length - 1;
        return this.elementos[ultimoIndice];
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

let historial = new PilaArreglo<string>();

// Apilando en orden
historial.apilar('google.com');
historial.apilar('unah.edu.hn');
historial.apilar('campus.unah.edu.hn');
historial.apilar('correo.unah.edu.hn');

console.log('Pagina actual:', historial.tope());

let atras1 = historial.desapilar();
console.log('Atras 1:', atras1);

let atras2 = historial.desapilar();
console.log('Atras 2:', atras2);

console.log('Paginas en historial:', historial.tamaño());