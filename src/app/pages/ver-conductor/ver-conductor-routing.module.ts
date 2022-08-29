import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerConductorPage } from './ver-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: VerConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerConductorPageRoutingModule {}
