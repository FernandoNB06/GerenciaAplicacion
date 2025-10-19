import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Plan {
  nombre: string;
  precio: string;
  descripcion: string;
}

@Component({
  selector: 'app-artesanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artesanos.component.html',
  styleUrls: ['./artesanos.component.scss']
})
export class ArtesanosComponent {
  modalAbierto = false;
  modoRegistro = false;
  planSeleccionado: Plan | null = null;
  suscripcionExitosa = false;

  constructor(private router: Router) {}

  abrirModal(nombre: string, precio: string, descripcion: string): void {
    this.planSeleccionado = { nombre, precio, descripcion };
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.modoRegistro = false;
    this.planSeleccionado = null;
    this.suscripcionExitosa = false;
    document.body.style.overflow = 'auto';
  }

  cambiarModo(): void {
    this.modoRegistro = !this.modoRegistro;
  }

  confirmarSuscripcion(): void {
    this.suscripcionExitosa = true;

    // Mostrar mensaje de éxito breve y redirigir
    setTimeout(() => {
      this.cerrarModal();
      alert(`✅ Te has registrado en el plan ${this.planSeleccionado?.nombre}.`);
      this.router.navigate(['/dashboard-artesano']); // 🚀 Redirigir al dashboard
    }, 1500);
  }
}
