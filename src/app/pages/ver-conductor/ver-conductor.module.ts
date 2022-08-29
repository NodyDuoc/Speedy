import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerConductorPageRoutingModule } from './ver-conductor-routing.module';

import { VerConductorPage } from './ver-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerConductorPageRoutingModule
  ],
  declarations: [VerConductorPage]
})
export class VerConductorPageModule {}
