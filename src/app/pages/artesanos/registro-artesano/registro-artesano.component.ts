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
    // Validar campos mínimos antes de registrar
    if (!this.artesano.nombre || !this.artesano.correo || !this.artesano.plan) {
      alert('⚠️ Por favor completa todos los campos obligatorios antes de continuar.');
      return;
    }

    alert('✅ Registro completado correctamente.');

    // 🟢 Guardar los datos en localStorage
    localStorage.setItem('artesanoLogueado', 'true');
    localStorage.setItem('nombreArtesano', this.artesano.nombre);
    localStorage.setItem('emailArtesano', this.artesano.correo);
    localStorage.setItem('telefonoArtesano', this.artesano.telefono);
    localStorage.setItem('departamentoArtesano', this.artesano.departamento);
    localStorage.setItem('ciudadArtesano', this.artesano.ciudad);
    localStorage.setItem('especialidadArtesano', this.artesano.especialidad);
    localStorage.setItem('experienciaArtesano', this.artesano.experiencia);
    localStorage.setItem('historiaArtesano', this.artesano.historia);
    localStorage.setItem('planArtesano', this.artesano.plan);
    localStorage.setItem('tipo', 'artesano'); // para distinguir el rol

    // 🚀 Redirigir al perfil directamente
    this.router.navigate(['/perfil-artesano']);
  }

}
