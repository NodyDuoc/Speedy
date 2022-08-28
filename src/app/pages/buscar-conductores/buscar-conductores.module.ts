import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarConductoresPageRoutingModule } from './buscar-conductores-routing.module';

import { BuscarConductoresPage } from './buscar-conductores.page';
import { BuscarConductorComponent } from 'src/app/components/buscar-conductor/buscar-conductor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarConductoresPageRoutingModule
  ],
  declarations: [BuscarConductoresPage,BuscarConductorComponent]
})
export class BuscarConductoresPageModule {}
