import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarritoService, ProductoCarrito } from '../../services/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  carritoAbierto = false;
  productosCarrito: ProductoCarrito[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.productos$.subscribe(productos => {
      this.productosCarrito = productos;
    });
  }

  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }

  subtotal(): number {
    return this.productosCarrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }

  total(): number {
    const envio = this.productosCarrito.length > 0 ? 15 : 0;
    return this.subtotal() + envio;
  }

  aumentarCantidad(p: ProductoCarrito) {
    p.cantidad++;
    this.carritoService.actualizarCarrito(this.productosCarrito);
  }

  disminuirCantidad(p: ProductoCarrito) {
    if (p.cantidad > 1) {
      p.cantidad--;
      this.carritoService.actualizarCarrito(this.productosCarrito);
    } else {
      this.eliminarProducto(p);
    }
  }

  eliminarProducto(p: ProductoCarrito) {
    this.carritoService.eliminarProducto(p);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}
