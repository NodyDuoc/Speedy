import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { Comp1Component } from '../components/comp1/comp1.component';
import { Comp2Component } from '../components/comp2/comp2.component';
import { Comp3Component } from '../components/comp3/comp3.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,Comp1Component,Comp2Component,Comp3Component]
})
export class HomePageModule {}
