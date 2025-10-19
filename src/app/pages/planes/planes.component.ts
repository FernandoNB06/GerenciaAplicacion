import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  suscripcionExitosa = false;

  // ✅ Inyectamos el router
  constructor(private router: Router) {}

  abrirModal(nombre: string, precio: string, descripcion: string): void {
    const artesano = localStorage.getItem('artesanoLogueado') === 'true';
    if (artesano) {
      alert('⚠ Primero cierra tu sesión de artesano antes de registrarte como comprador.');
      return;
    }

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

  // ✅ ACTUALIZADO: ahora guarda datos en localStorage
  confirmarSuscripcion(): void {
    this.suscripcionExitosa = true;

    // Obtenemos valores de los inputs del formulario
    const nombreInput = document.querySelector('input[placeholder="Tu nombre"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder="tu@email.com"]') as HTMLInputElement;

    const nombre = nombreInput ? nombreInput.value : 'Usuario';
    const email = emailInput ? emailInput.value : 'sincorreo@email.com';

    // 💾 Guardar los datos en localStorage
    localStorage.setItem('compradorLogueado', 'true');
    localStorage.setItem('nombreComprador', nombre);
    localStorage.setItem('emailComprador', email);
    localStorage.setItem('planComprador', this.planSeleccionado?.nombre || 'Básico');
    localStorage.setItem('precioPlan', this.planSeleccionado?.precio || 'Bs 0');
    localStorage.setItem('descripcionPlan', this.planSeleccionado?.descripcion || '');
    localStorage.setItem('tipo', 'comprador');

    // 🚀 Mostrar mensaje y redirigir al perfil
    setTimeout(() => {
      this.cerrarModal();
      alert(`✅ Te has registrado exitosamente en el plan ${this.planSeleccionado?.nombre}`);
      this.router.navigate(['/perfil-comprador']);
    }, 1500);
  }
}
