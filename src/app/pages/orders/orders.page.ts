import { Component, OnInit } from '@angular/core';
import {Routes, Router} from '@angular/router'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  ordenes: boolean = true;
  seguimientos: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    var status = ev.detail.value;

    if (status == 'ordenes'){
      this.ordenes = true;
      this.seguimientos = false;
    }
    if (status == 'seguimientos'){
      this.ordenes = false;
      this.seguimientos = true;
    }
  }


  tracing(){
    this.router.navigate(['/tracing']);
  }
}
