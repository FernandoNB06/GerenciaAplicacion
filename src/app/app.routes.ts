import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ArtesanosComponent } from './pages/artesanos/artesanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { RegistroArtesanoComponent } from './pages/artesanos/registro-artesano/registro-artesano.component';
import { DashboardArtesanoComponent } from './pages/artesanos/dashboard-artesano/dashboard-artesano.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'para-artesanos', component: ArtesanosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'registro-artesano', component: RegistroArtesanoComponent },
  { path: 'dashboard-artesano', component: DashboardArtesanoComponent },
  { path: '**', redirectTo: '' }, // SIEMPRE AL FINAL
];
