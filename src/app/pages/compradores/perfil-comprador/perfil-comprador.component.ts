import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-comprador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-comprador.component.html',
  styleUrls: ['./perfil-comprador.component.scss']
})
export class PerfilCompradorComponent implements OnInit {
  comprador: any = null;

  ngOnInit(): void {
    const nombre = localStorage.getItem('nombreComprador');
    const email = localStorage.getItem('emailComprador');
    const telefono = localStorage.getItem('telefonoComprador');
    const direccion = localStorage.getItem('direccionComprador');
    const plan = localStorage.getItem('planComprador');
    const precioPlan = localStorage.getItem('precioPlan');
    const descripcionPlan = localStorage.getItem('descripcionPlan');

    if (nombre || email) {
      this.comprador = {
        nombre,
        email,
        telefono,
        direccion,
        plan,
        precioPlan,
        descripcionPlan
      };
    } else {
      console.warn('⚠ No se encontraron datos del comprador en localStorage');
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('compradorLogueado');
    localStorage.removeItem('nombreComprador');
    localStorage.removeItem('emailComprador');
    localStorage.removeItem('telefonoComprador');
    localStorage.removeItem('direccionComprador');
    localStorage.removeItem('planComprador');
    localStorage.removeItem('precioPlan');
    localStorage.removeItem('descripcionPlan');
    localStorage.removeItem('tipo');

    alert('Sesión cerrada correctamente.');
    window.location.href = '/';
  }
}
