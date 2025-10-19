import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-artesano',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-artesano.component.html',
  styleUrls: ['./perfil-artesano.component.scss']
})
export class PerfilArtesanoComponent implements OnInit {
  usuario: any = null;

  ngOnInit(): void {
    // 🔹 Intentamos obtener los datos del usuario
    const datos = localStorage.getItem('users') || localStorage.getItem('datosArtesano');

    if (datos) {
      this.usuario = JSON.parse(datos);
    } else {
      console.warn('⚠ No se encontraron datos del artesano en localStorage');
    }
  }

  // 👇 Agrega este método DENTRO de la clase, no fuera
  cerrarSesion(): void {
    localStorage.removeItem('artesanoLogueado');
    localStorage.removeItem('users');
    localStorage.removeItem('datosArtesano');
    alert('Sesión cerrada correctamente.');
    window.location.href = '/';
  }
}
