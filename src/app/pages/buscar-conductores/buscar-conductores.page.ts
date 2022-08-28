import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
