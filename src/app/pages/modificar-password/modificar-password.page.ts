import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-password',
  templateUrl: './modificar-password.page.html',
  styleUrls: ['./modificar-password.page.scss'],
})
export class ModificarPasswordPage implements OnInit {

  constructor(private router: Router, private menu: MenuController) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
