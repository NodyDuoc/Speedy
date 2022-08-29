import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarRutaPageRoutingModule } from './modificar-ruta-routing.module';

import { ModificarRutaPage } from './modificar-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarRutaPageRoutingModule
  ],
  declarations: [ModificarRutaPage]
})
export class ModificarRutaPageModule {}
