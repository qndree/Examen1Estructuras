/**
 * Ejercicio 2 - Listas Enlazadas
 */

// Nodo

class Nodo<T> {
    public valor: T;
    public siguiente: Nodo<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.siguiente = null;
    }
}

// Interface

interface ILista<T> {
    insertarAlFinal(valor: T): void;
    eliminarPrimero(): T | null;
    buscar(valor: T): boolean;
    tamaño(): number;
    imprimir(): void;
}

// Implementacion

class ListaEnlazada<T> implements ILista<T> {
    private cabeza: Nodo<T> | null = null;

    insertarAlFinal(valor: T): void {
        let nuevo = new Nodo<T>(valor);
        
        if (this.cabeza == null) {
            this.cabeza = nuevo;
            return;
        }

        let temp = this.cabeza;
        while (temp.siguiente != null) {
            temp = temp.siguiente;
        }
        temp.siguiente = nuevo;
    }

    eliminarPrimero(): T | null {
        if (this.cabeza == null) {
            return null;
        }
        
        let temp = this.cabeza.valor;
        this.cabeza = this.cabeza.siguiente;
        return temp;
    }

    buscar(valor: T): boolean {
        let temp = this.cabeza;
        while (temp != null) {
            if (temp.valor === valor) {
                return true;
            }
            temp = temp.siguiente;
        }
        return false;
    }

    tamaño(): number {
        let contador = 0;
        let temp = this.cabeza;
        while (temp != null) {
            contador++;
            temp = temp.siguiente;
        }
        return contador;
    }

    imprimir(): void {
        let temp = this.cabeza;
        while (temp != null) {
            console.log(temp.valor);
            temp = temp.siguiente;
        }
    }
}

// Prueba

let listaClientes = new ListaEnlazada<string>();

listaClientes.insertarAlFinal('Juan Perez');
listaClientes.insertarAlFinal('Maria Lopez');
listaClientes.insertarAlFinal('Carlos Diaz');
listaClientes.insertarAlFinal('Ana Rivas');

console.log(listaClientes.buscar('Maria Lopez'));
console.log(listaClientes.buscar('Luis Gomez'));

let eliminado = listaClientes.eliminarPrimero();
console.log(eliminado);

listaClientes.imprimir();