import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  ImageOption = {
    slidesPerView: 1,
    pagination: true,
    spaceBetween: 0,
  }
  quantity: 0;

  constructor() { }

  ngOnInit() {
    
  }
  

}
