import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPerfilPageRoutingModule } from './modificar-perfil-routing.module';

import { ModificarPerfilPage } from './modificar-perfil.page';
import { BarraLateralComponent } from 'src/app/components/barra-lateral/barra-lateral.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPerfilPageRoutingModule
  ],
  declarations: [ModificarPerfilPage,BarraLateralComponent]
})
export class ModificarPerfilPageModule {}
