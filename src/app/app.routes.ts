import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ArtesanosComponent } from './pages/artesanos/artesanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'para-artesanos', component: ArtesanosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: '**', redirectTo: '' } // redirige rutas no válidas al home
];
