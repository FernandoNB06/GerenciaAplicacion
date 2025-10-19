import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-artesano',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-artesano.component.html',
  styleUrls: ['./perfil-artesano.component.scss']
})
export class PerfilArtesanoComponent implements OnInit {
  usuario: any = null;

  // 👇 El constructor VA DENTRO de la clase
  constructor(private router: Router) {}

  // 🔹 BOTÓN “Ir al Dashboard”
  irAlDashboard(): void {
    this.router.navigate(['/dashboard-artesano']);
  }

  ngOnInit(): void {
    // 🔹 Leemos datos personales y de sesión
    const nombre = localStorage.getItem('nombreArtesano');
    const email = localStorage.getItem('emailArtesano');
    const telefono = localStorage.getItem('telefonoArtesano');
    const departamento = localStorage.getItem('departamentoArtesano');
    const ciudad = localStorage.getItem('ciudadArtesano');
    const especialidad = localStorage.getItem('especialidadArtesano');
    const experiencia = localStorage.getItem('experienciaArtesano');
    const historia = localStorage.getItem('historiaArtesano');
    const plan = localStorage.getItem('planArtesano');
    const empresaId = localStorage.getItem('empresaId');
    const token = localStorage.getItem('token');

    if (nombre || email || plan) {
      this.usuario = {
        nombre,
        email,
        telefono,
        departamento,
        ciudad,
        especialidad,
        experiencia,
        historia,
        plan,
        empresaId,
        token
      };
    } else {
      console.warn('⚠ No se encontraron datos del artesano en localStorage');
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('artesanoLogueado');
    localStorage.removeItem('empresaId');
    localStorage.removeItem('tipo');
    localStorage.removeItem('token');
    localStorage.removeItem('authToken');
    alert('Sesión cerrada correctamente.');
    window.location.href = '/';
  }
}
