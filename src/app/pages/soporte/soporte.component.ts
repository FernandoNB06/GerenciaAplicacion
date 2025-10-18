import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pregunta {
  titulo: string;
  respuesta: string;
  abierta?: boolean;
}

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent {
  preguntas: Pregunta[] = [
    {
      titulo: '¿Cómo realizo una compra?',
      respuesta: 'Puedes navegar en el catálogo, seleccionar tus productos y completar la compra con tu método de pago preferido.'
    },
    {
      titulo: '¿Cuáles son los métodos de pago disponibles?',
      respuesta: 'Aceptamos pagos con tarjeta de débito/crédito, transferencias bancarias y billeteras móviles autorizadas.'
    },
    {
      titulo: '¿Cuánto tarda la entrega?',
      respuesta: 'Las entregas en el Cercado se realizan en 1-3 días hábiles. Para otros municipios, el tiempo puede variar entre 3-7 días dependiendo de la ubicación.'
    },
    {
      titulo: '¿Puedo devolver un producto?',
      respuesta: 'Sí, aceptamos devoluciones dentro de los 7 días posteriores a la entrega si el producto está en buenas condiciones.'
    },
    {
      titulo: '¿Cómo me verifico como artesano?',
      respuesta: 'Puedes registrarte en la sección “Vender como Artesano” y completar la verificación enviando tu información básica y muestras de tus productos.'
    },
    {
      titulo: '¿Cuánto cobran de comisión por venta?',
      respuesta: 'La comisión depende del plan de artesano que elijas: 5%, 3% o 1% según el tipo de plan.'
    },
    {
      titulo: '¿Cómo funciona el pago para artesanos?',
      respuesta: 'Los pagos se realizan semanalmente a la cuenta bancaria o billetera móvil registrada por el artesano.'
    },
    {
      titulo: '¿Qué garantía tienen los productos?',
      respuesta: 'Cada producto cuenta con trazabilidad y garantía de autenticidad, asegurando que proviene directamente del artesano.'
    }
  ];

  togglePregunta(index: number) {
    this.preguntas[index].abierta = !this.preguntas[index].abierta;
  }

  enviarMensaje(event: Event) {
    event.preventDefault();
    alert('✅ Tu mensaje ha sido enviado. ¡Gracias por contactarte con Sumak Market!');
  }
}
