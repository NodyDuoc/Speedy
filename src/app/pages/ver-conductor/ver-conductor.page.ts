import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-conductor',
  templateUrl: './ver-conductor.page.html',
  styleUrls: ['./ver-conductor.page.scss'],
})
export class VerConductorPage implements OnInit {

  constructor(private router: Router, private menu: MenuController) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
