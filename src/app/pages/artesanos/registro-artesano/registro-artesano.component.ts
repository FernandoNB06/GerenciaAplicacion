import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-artesano',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-artesano.component.html',
  styleUrls: ['./registro-artesano.component.scss']
})
export class RegistroArtesanoComponent {
  paso = 1;

  // datos simulados
  artesano = {
    nombre: '',
    correo: '',
    telefono: '',
    departamento: '',
    ciudad: '',
    especialidad: '',
    experiencia: '',
    historia: '',
    plan: 'basico'
  };

  siguiente() {
    if (this.paso < 3) this.paso++;
  }

  atras() {
    if (this.paso > 1) this.paso--;
  }

  completarRegistro() {
    alert('✅ Registro completado con éxito');
  }
}
