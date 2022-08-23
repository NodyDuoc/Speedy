import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfilPageRoutingModule } from './editar-perfil-routing.module';

import { EditarPerfilPage } from './editar-perfil.page';
import { BarraLateralComponent } from 'src/app/components/barra-lateral/barra-lateral.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfilPageRoutingModule
  ],
  declarations: [EditarPerfilPage,BarraLateralComponent]
})
export class EditarPerfilPageModule {}
