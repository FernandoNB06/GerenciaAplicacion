import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  nombre: string;
  precio: string;
  descripcion: string;
}

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent {
  modalAbierto = false;
  modoRegistro = false;
  planSeleccionado: Plan | null = null;
  suscripcionExitosa = false; // ✅ NUEVO

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
    setTimeout(() => {
      this.cerrarModal();
      alert(`✅ Te has suscrito al plan ${this.planSeleccionado?.nombre}`);
    }, 1500);
  }
}
