import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPasajerosPage } from './buscar-pasajeros.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPasajerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPasajerosPageRoutingModule {}
