import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarConductoresPage } from './buscar-conductores.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarConductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarConductoresPageRoutingModule {}
