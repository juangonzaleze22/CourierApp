import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.page.html',
  styleUrls: ['./tracing.page.scss'],
})
export class TracingPage implements OnInit {
  /* Estatus porcentaje 

  status == 1
  porcentage: 25%
  class = status1

  status == 2
  porcentage: 50%
  status1
  class = status2

  status == 3
  porcentage: 75%
  class = status3

  status == 4
  porcentage: 100%
  class = status4

  */

  stauts;
  rating: 4;

  constructor() { }

  ngOnInit() {
  }

}
