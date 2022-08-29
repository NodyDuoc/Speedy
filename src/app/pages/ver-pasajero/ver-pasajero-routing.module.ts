import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPasajeroPage } from './ver-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: VerPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPasajeroPageRoutingModule {}
