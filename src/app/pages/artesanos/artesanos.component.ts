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

  // 🔹 ABRIR MODAL
  abrirModal(nombre: string, precio: string, descripcion: string): void {
    const artesano = localStorage.getItem('artesanoLogueado') === 'true';
    const comprador = localStorage.getItem('compradorLogueado') === 'true';

    if (comprador) {
      alert('⚠ Primero cierra tu sesión de comprador antes de registrarte como artesano.');
      return;
    }

    if (artesano) {
      this.router.navigate(['/dashboard-artesano']);
      return;
    }

    // ✅ Si nadie está logueado, abrimos el modal
    this.planSeleccionado = { nombre, precio, descripcion };
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
  }

  // 🔹 CERRAR MODAL
  cerrarModal(): void {
    this.modalAbierto = false;
    this.modoRegistro = false;
    this.planSeleccionado = null;
    this.suscripcionExitosa = false;
    document.body.style.overflow = 'auto';
  }

  // 🔹 CAMBIAR ENTRE LOGIN Y REGISTRO
  cambiarModo(): void {
    this.modoRegistro = !this.modoRegistro;
  }

  // 🔹 CONFIRMAR SUSCRIPCIÓN / REGISTRO
  confirmarSuscripcion(): void {
    this.suscripcionExitosa = true;

    // Obtenemos los valores del formulario del modal
    const nombreInput = document.querySelector('input[placeholder="Ej. Manos Andinas"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder="tu@email.com"]') as HTMLInputElement;

    const nombre = nombreInput?.value || 'Artesano Nuevo';
    const correo = emailInput?.value || 'sin-correo@ejemplo.com';

    // 💾 Guardar en localStorage
    localStorage.setItem('artesanoLogueado', 'true');
    localStorage.setItem('nombreArtesano', nombre);
    localStorage.setItem('emailArtesano', correo);
    localStorage.setItem('planArtesano', this.planSeleccionado?.nombre || 'Básico');
    localStorage.setItem('precioPlanArtesano', this.planSeleccionado?.precio || 'Bs 0');
    localStorage.setItem('descripcionPlanArtesano', this.planSeleccionado?.descripcion || '');
    localStorage.setItem('tipo', 'artesano');

    // ✅ Mostrar mensaje y redirigir
    setTimeout(() => {
      this.cerrarModal();
      alert(`✅ Te has registrado exitosamente en el plan ${this.planSeleccionado?.nombre}`);
      this.router.navigate(['/perfil-artesano']);
    }, 1500);
  }
}
