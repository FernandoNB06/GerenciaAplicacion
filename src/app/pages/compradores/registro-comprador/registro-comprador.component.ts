import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-comprador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-comprador.component.html',
  styleUrls: ['./registro-comprador.component.scss']
})
export class RegistroCompradorComponent {
  comprador = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  };

  constructor(private router: Router) {}

  registrarComprador() {
    if (!this.comprador.nombre || !this.comprador.correo || !this.comprador.telefono) {
      alert('⚠️ Por favor completa todos los campos obligatorios.');
      return;
    }

    alert('✅ Registro de comprador completado correctamente.');

    // 💾 Guardar en localStorage
    localStorage.setItem('compradorLogueado', 'true');
    localStorage.setItem('nombreComprador', this.comprador.nombre);
    localStorage.setItem('emailComprador', this.comprador.correo);
    localStorage.setItem('telefonoComprador', this.comprador.telefono);
    localStorage.setItem('direccionComprador', this.comprador.direccion);
    localStorage.setItem('tipo', 'comprador');

    // 🚀 Redirigir al perfil del comprador
    this.router.navigate(['/perfil-comprador']);
  }
}
