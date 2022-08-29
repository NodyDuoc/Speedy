import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-conductores',
  templateUrl: './buscar-conductores.page.html',
  styleUrls: ['./buscar-conductores.page.scss'],
})
export class BuscarConductoresPage implements OnInit {

  

  usuarios: any = [
    {
      nombre: 'Juan Carlos',
      carrera: 'Ing Informatica'
    },
    {
      nombre: 'Maria Santanos',
      carrera: 'Telecomunacaciones'
    },
    {
      nombre: 'Marco Filiano',
      carrera: 'Contraterrorismo'
    },
    {
      nombre: 'Estevan Chaves',
      carrera: 'Secuestro Profesional'
    },
    {
      nombre: 'Mega Mente',
      carrera: 'SUPER villano'
    },
  ]

  constructor(private router: Router, private menu: MenuController) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
