import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-conductor',
  templateUrl: './buscar-conductor.component.html',
  styleUrls: ['./buscar-conductor.component.scss'],
})
export class BuscarConductorComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit() {}

}
