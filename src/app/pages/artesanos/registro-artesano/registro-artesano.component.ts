import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-artesano',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-artesano.component.html',
  styleUrls: ['./registro-artesano.component.scss']
})
export class RegistroArtesanoComponent implements OnInit {
  paso = 1;

  artesano = {
    nombre: '',
    correo: '',
    telefono: '',
    departamento: '',
    ciudad: '',
    especialidad: '',
    experiencia: '',
    historia: '',
    plan: ''
  };

  constructor(private router: Router) {}

  // ✅ Si ya está logueado, redirigir directo al dashboard
  ngOnInit(): void {
    const logueado = localStorage.getItem('artesanoLogueado');
    if (logueado === 'true') {
      this.router.navigate(['/dashboard-artesano']);
    }
  }

  siguiente() {
    if (this.paso < 3) this.paso++;
  }

  atras() {
    if (this.paso > 1) this.paso--;
  }

  completarRegistro() {
    alert('✅ Registro completado correctamente.');

    // 🟢 Guardar el estado de sesión
    localStorage.setItem('artesanoLogueado', 'true');

    // 🚀 Redirigir al dashboard
    this.router.navigate(['/dashboard-artesano']);
  }
}
