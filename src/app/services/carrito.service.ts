import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: ProductoCarrito[] = [];
  private productosSubject = new BehaviorSubject<ProductoCarrito[]>([]);
  productos$ = this.productosSubject.asObservable();

  constructor() {}

  agregarProducto(producto: ProductoCarrito) {
    const existente = this.productos.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }

    this.productosSubject.next([...this.productos]);
  }

  /** 🔄 Actualiza el carrito completo (usado en aumentar/disminuir cantidad) */
  actualizarCarrito(productos: ProductoCarrito[]) {
    this.productos = [...productos];
    this.productosSubject.next(this.productos);
  }

  /** ❌ Elimina un producto específico */
  eliminarProducto(producto: ProductoCarrito) {
    this.productos = this.productos.filter(p => p.id !== producto.id);
    this.productosSubject.next([...this.productos]);
  }

  /** 🧹 Vacía todo el carrito */
  vaciarCarrito() {
    this.productos = [];
    this.productosSubject.next([]);
  }

  /** 💰 Calcula el total actual del carrito (opcional) */
  obtenerTotal(): number {
    return this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }

  /** 📦 Devuelve todos los productos actuales */
  obtenerProductos(): ProductoCarrito[] {
    return [...this.productos];
  }
}
