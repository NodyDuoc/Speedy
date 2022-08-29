import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'modificar-perfil',
    loadChildren: () => import('./pages/modificar-perfil/modificar-perfil.module').then( m => m.ModificarPerfilPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'modificar-password',
    loadChildren: () => import('./pages/modificar-password/modificar-password.module').then( m => m.ModificarPasswordPageModule)
  },
  {
    path: 'buscar-conductores',
    loadChildren: () => import('./pages/buscar-conductores/buscar-conductores.module').then( m => m.BuscarConductoresPageModule)
  },
  {
    path: 'buscar-pasajeros',
    loadChildren: () => import('./pages/buscar-pasajeros/buscar-pasajeros.module').then( m => m.BuscarPasajerosPageModule)
  },  {
    path: 'ver-conductor',
    loadChildren: () => import('./pages/ver-conductor/ver-conductor.module').then( m => m.VerConductorPageModule)
  },
  {
    path: 'ver-pasajero',
    loadChildren: () => import('./pages/ver-pasajero/ver-pasajero.module').then( m => m.VerPasajeroPageModule)
  },
  {
    path: 'modificar-ruta',
    loadChildren: () => import('./pages/modificar-ruta/modificar-ruta.module').then( m => m.ModificarRutaPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
