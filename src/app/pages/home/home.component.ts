import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  precio: number;
  imagen: string;
  etiqueta?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
  categorias: string[] = ['Todos', 'Textiles', 'Cerámica', 'Joyería', 'Artesanía', 'Cuero', 'Madera'];
  categoriaSeleccionada: string = 'Todos';

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Alfarería Tradicional',
      descripcion: 'Set de vasos hechos con colores naturales y técnicas ancestrales.',
      categoria: 'Cerámica',
      ubicacion: 'Tarata, Cochabamba',
      precio: 280,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Descuento'
    },
    {
      id: 2,
      nombre: 'Cerámica Decorativa',
      descripcion: 'Hechas a mano con acabado artesanal. Ideales para decoración del hogar.',
      categoria: 'Cerámica',
      ubicacion: 'Cochabamba',
      precio: 150,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Descuento'
    },
    {
      id: 3,
      nombre: 'Collar de Plata Tunari',
      descripcion: 'Joya artesanal inspirada en la montaña del Tunari. Pieza única hecha a mano.',
      categoria: 'Joyería',
      ubicacion: 'La Paz',
      precio: 420,
      imagen: 'assets/imagenes/hero-artesania.jpg',
      etiqueta: 'Nuevo'
    },
    {
      id: 4,
      nombre: 'Chalina de Alpaca',
      descripcion: 'Hecha con lana de alpaca de alta calidad, ideal para el invierno.',
      categoria: 'Textiles',
      ubicacion: 'Oruro',
      precio: 180,
      imagen: 'assets/imagenes/hero-artesania.jpg'
    },
    {
      id: 5,
      nombre: 'Cartera de Cuero Tallado',
      descripcion: 'Elaborada a mano por artesanos del valle, con detalles tallados únicos.',
      categoria: 'Cuero',
      ubicacion: 'Sucre',
      precio: 380,
      imagen: 'assets/imagenes/hero-artesania.jpg'
    }
  ];

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }
}
