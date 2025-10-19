import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // cuando entra en pantalla, activa la animación
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // solo una vez
        }
      });
    }, { threshold: 0.1 });

    // si algo ya está visible al cargar, también se muestra
    elements.forEach(el => {
      observer.observe(el);
      if (this.isInViewport(el)) {
        el.classList.add('show');
      }
    });
  }

  private isInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }
}
