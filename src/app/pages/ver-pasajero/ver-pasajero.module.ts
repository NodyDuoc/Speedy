import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPasajeroPageRoutingModule } from './ver-pasajero-routing.module';

import { VerPasajeroPage } from './ver-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPasajeroPageRoutingModule
  ],
  declarations: [VerPasajeroPage]
})
export class VerPasajeroPageModule {}
