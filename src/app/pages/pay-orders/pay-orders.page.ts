import { Component, OnInit } from '@angular/core';
import { DirectionsPage } from '../directions/directions.page'
import { ModalController } from '@ionic/angular';
;
@Component({
  selector: 'app-pay-orders',
  templateUrl: './pay-orders.page.html',
  styleUrls: ['./pay-orders.page.scss'],
})
export class PayOrdersPage implements OnInit {
  section = 'imagen';

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {
  }

  selected(value: string) {
    this.section = value;
  }

  async modalDirection() {
    const modal = await this.modalController.create({
      component: DirectionsPage,
      cssClass: 'modalDirection'
    });
    return await modal.present();
  }
}
