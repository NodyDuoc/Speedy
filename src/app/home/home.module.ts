import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRoutingModule } from './home-routing.module';
import { Comp1Component } from '../components/comp1/comp1.component';
import { Comp2Component } from '../components/comp2/comp2.component';
import { Comp3Component } from '../components/comp3/comp3.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'inicio',
        component: Comp1Component
      },
      {
        path:'registroAU',
        component: Comp2Component
      },
      {
        path: 'registroPE',
        component: Comp3Component
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
