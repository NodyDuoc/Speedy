import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-pasajeros',
  templateUrl: './buscar-pasajeros.page.html',
  styleUrls: ['./buscar-pasajeros.page.scss'],
})
export class BuscarPasajerosPage implements OnInit {

  constructor(private router: Router, private menu: MenuController) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
