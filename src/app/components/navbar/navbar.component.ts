import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CarritoService, ProductoCarrito } from '../../services/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  carritoAbierto = false;
  productosCarrito: ProductoCarrito[] = [];

  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carritoService.productos$.subscribe(productos => {
      this.productosCarrito = productos;
    });
  }

  // 🛒 --- FUNCIONES DEL CARRITO ---
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

  // 👤 --- PERFIL SEGÚN TIPO DE USUARIO ---
    // 👤 --- PERFIL SEGÚN TIPO DE USUARIO ---
    irPerfil(): void {
      const artesano = localStorage.getItem('artesanoLogueado');
      const comprador = localStorage.getItem('compradorLogueado');

      // Convertimos a booleano correctamente
      const esArtesano = String(artesano).toLowerCase() === 'true';
      const esComprador = String(comprador).toLowerCase() === 'true';

      if (esArtesano) {
        console.log('➡ Redirigiendo a perfil-artesano');
        this.router.navigate(['/perfil-artesano']);
      } else if (esComprador) {
        console.log('➡ Redirigiendo a perfil-comprador');
        this.router.navigate(['/perfil-comprador']);
      } else {
        console.log('⚠ No hay sesión activa');
        alert('Debes iniciar sesión antes de ver tu perfil 🧍‍♂️');
        this.router.navigate(['/home']);
      }
    }


}
