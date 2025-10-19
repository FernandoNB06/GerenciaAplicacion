import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CarritoService } from '../../services/carrito.service';
import { Router, RouterModule } from '@angular/router';

interface Artesano {
  nombre: string;
  ciudad: string;
  foto: string;
  descripcion: string;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  precio: number;
  imagen: string;
  etiqueta?: string;
  artesano?: Artesano;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listaAnimada', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger('100ms', animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true }),
        query(':leave', [
          animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private carritoService: CarritoService, private router: Router) {}

  categorias: string[] = ['Todos', 'Textiles', 'Cerámica', 'Joyería', 'Artesanía', 'Cuero', 'Madera'];
  categoriaSeleccionada: string = 'Todos';

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Alfarería Tradicional',
      descripcion: 'Set de vasos hechos con colores naturales y técnicas ancestrales.',
      categoria: 'Cerámica',
      ubicacion: 'Cochabamba',
      precio: 280,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Descuento',
      artesano: {
        nombre: 'Juan Quispe',
        ciudad: 'Cercado, Cochabamba',
        foto: 'assets/imagenes/default.png',
        descripcion: 'Artesano especializado en cerámica tradicional del valle, con más de 15 años de experiencia en torno al barro.'
      }
    },
    {
      id: 2,
      nombre: 'Cerámica Decorativa',
      descripcion: 'Hechas a mano con acabado artesanal. Ideales para decoración del hogar.',
      categoria: 'Cerámica',
      ubicacion: 'Cochabamba',
      precio: 150,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Descuento',
      artesano: {
        nombre: 'María Flores',
        ciudad: 'Cercado, Cochabamba',
        foto: 'assets/imagenes/default.png',
        descripcion: 'Creadora de piezas decorativas con diseños florales inspirados en la naturaleza del valle cochabambino.'
      }
    },
    {
      id: 3,
      nombre: 'Collar de Plata Tunari',
      descripcion: 'Joya artesanal inspirada en la montaña del Tunari. Pieza única hecha a mano.',
      categoria: 'Joyería',
      ubicacion: 'Cochabamba',
      precio: 420,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Nuevo',
      artesano: {
        nombre: 'Rosa Mamani',
        ciudad: 'Cercado, Cochabamba',
        foto: 'assets/imagenes/default.png',
        descripcion: 'Creadora de joyería en plata con diseños inspirados en la cultura Tiwanaku y los paisajes del Tunari.'
      }
    },
    {
      id: 4,
      nombre: 'Chalina de Alpaca',
      descripcion: 'Hecha con lana de alpaca de alta calidad, ideal para el invierno.',
      categoria: 'Textiles',
      ubicacion: 'Cochabamba',
      precio: 180,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      artesano: {
        nombre: 'Celia Huanca',
        ciudad: 'Cercado, Cochabamba',
        foto: 'assets/imagenes/default.png',
        descripcion: 'Tejedora de prendas finas con lana de alpaca, transmitiendo técnicas ancestrales de su familia.'
      }
    },
    {
      id: 5,
      nombre: 'Cartera de Cuero Tallado',
      descripcion: 'Elaborada a mano por artesanos del valle, con detalles tallados únicos.',
      categoria: 'Cuero',
      ubicacion: 'Cochabamba',
      precio: 380,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      artesano: {
        nombre: 'David Rocha',
        ciudad: 'Cercado, Cochabamba',
        foto: 'assets/imagenes/default.png',
        descripcion: 'Especialista en cuero tallado con motivos andinos y florales, combinando arte y funcionalidad.'
      }
    }
  ];

  productoSeleccionado: Producto | null = null;

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  agregarAlCarrito(p: any) {
    this.carritoService.agregarProducto({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.imagen,
      cantidad: 1
    });
    alert(`🛒 ${p.nombre} agregado al carrito`);
  }

  verDetalle(producto: Producto) {
    this.productoSeleccionado = producto;
    document.body.style.overflow = 'hidden';
  }

  cerrarDetalle() {
    this.productoSeleccionado = null;
    document.body.style.overflow = 'auto';
  }

  // 🔹 NUEVO: lógica para botón "Vender como Artesano"
  irAVenderComoArtesano() {
    const logueado = localStorage.getItem('artesanoLogueado');

    if (logueado === 'true') {
      // 🚀 Ya está logueado, redirige al dashboard
      this.router.navigate(['/dashboard-artesano']);
    } else {
      // 🟠 No está logueado, redirige al formulario
      this.router.navigate(['/registro-artesano']);
    }
  }
}
