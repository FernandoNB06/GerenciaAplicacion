import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  destacado: boolean;
  imagen: string;
}

@Component({
  selector: 'app-dashboard-artesano',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-artesano.component.html',
  styleUrls: ['./dashboard-artesano.component.scss']
})
export class DashboardArtesanoComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Aguayo Tradicional',
      descripcion:
        'Textil andino tejido a mano con colores naturales. Cada aguayo cuenta con diseños únicos que representan la cosmovisión andina.',
      precio: 280,
      stock: 15,
      categoria: 'Textiles',
      destacado: true,
      imagen: 'assets/imagenes/hero-artesania.jpg'
    },
    {
      id: 2,
      nombre: 'Chalina de Alpaca',
      descripcion:
        'Chalina tejida en lana de alpaca 100% natural. Suave, abrigadora y con diseños tradicionales bolivianos.',
      precio: 180,
      stock: 20,
      categoria: 'Textiles',
      destacado: false,
      imagen: 'assets/imagenes/hero-artesania.jpg'
    }
  ];

  modalAbierto = false;

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoria: '',
    destacado: false,
    imagen: ''
  };

  // === Abrir/Cerrar Modal ===
  abrirModal() {
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalAbierto = false;
    document.body.style.overflow = 'auto';
  }

  // === Acciones ===
  agregarProducto() {
    if (
      !this.nuevoProducto.nombre ||
      !this.nuevoProducto.descripcion ||
      !this.nuevoProducto.precio ||
      !this.nuevoProducto.categoria
    ) {
      alert('⚠️ Por favor completa todos los campos.');
      return;
    }

    this.nuevoProducto.id = this.productos.length + 1;
    this.nuevoProducto.imagen =
      this.nuevoProducto.imagen || 'assets/imagenes/hero-artesania.jpg';
    this.productos.push({ ...this.nuevoProducto });

    this.nuevoProducto = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
      categoria: '',
      destacado: false,
      imagen: ''
    };

    this.cerrarModal();
    alert('✅ Producto agregado correctamente.');
  }

  editarProducto(nombre: string) {
    alert(`✏️ Editar producto: ${nombre}`);
  }

  eliminarProducto(nombre: string) {
    if (confirm(`¿Seguro que deseas eliminar "${nombre}"?`)) {
      this.productos = this.productos.filter(p => p.nombre !== nombre);
    }
  }
}
