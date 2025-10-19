import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ArtesanosComponent } from './pages/artesanos/artesanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { RegistroArtesanoComponent } from './pages/artesanos/registro-artesano/registro-artesano.component';
import { DashboardArtesanoComponent } from './pages/artesanos/dashboard-artesano/dashboard-artesano.component';
import { PerfilArtesanoComponent } from './pages/artesanos/perfil-artesano/perfil-artesano.component';
import { PerfilCompradorComponent } from './pages/compradores/perfil-comprador/perfil-comprador.component'; // 👈 nuevo import
import { RegistroCompradorComponent } from './pages/compradores/registro-comprador/registro-comprador.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'para-artesanos', component: ArtesanosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'registro-artesano', component: RegistroArtesanoComponent },
  { path: 'dashboard-artesano', component: DashboardArtesanoComponent },
  { path: 'perfil-artesano', component: PerfilArtesanoComponent },
  { path: 'perfil-comprador', component: PerfilCompradorComponent }, // 👈 nueva ruta
  { path: 'registro-comprador', component: RegistroCompradorComponent },
  { path: '**', redirectTo: '' }, // SIEMPRE AL FINAL
];


