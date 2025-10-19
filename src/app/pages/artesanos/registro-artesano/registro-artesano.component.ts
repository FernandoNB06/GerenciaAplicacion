import { Component } from '@angular/core';
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
export class RegistroArtesanoComponent {
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

  siguiente() {
    if (this.paso < 3) this.paso++;
  }

  atras() {
    if (this.paso > 1) this.paso--;
  }

  completarRegistro() {
    // ✅ Aquí podrías guardar los datos en backend más adelante
    alert('✅ Registro completado correctamente.');

    // 🚀 Redirigir al dashboard
    this.router.navigate(['/dashboard-artesano']);
  }
}
