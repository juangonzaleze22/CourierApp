import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ProductsService } from '../../services/products/products.service';



@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.page.html',
  styleUrls: ['./home-chef.page.scss'],
})
export class HomeChefPage implements OnInit {

  products = null;
  
  platos= [
    {
      id: 0,
      title: 'Producto 1',
      text: 'lorem ipsum asdasdasd',
      img: 'assets/test/pasta1.jpg',
      price: '10',
      rating: 4
    },
    {
      id: 1,
      title: 'Producto 2',
      text: 'lorem ipsum a',
      img: 'assets/test/pasta2.jpg',
      price: '20',
      rating: 3
    },
    {
      id: 2,
      title: 'Producto 3',
      text: 'lorem ipsum alorem ipsum a',
      img: 'assets/test/plato1.jpg',
      price: '15',
      rating: 2
    },
    {
      id: 3,
      title: 'Producto 4',
      text: 'lorem ipsum a 2',
      img: 'assets/test/rest1.jpg',
      price: '12',
      rating: 3
    },
    {
      id: 4,
      title: 'Producto 5',
      text: 'description',
      img: 'assets/test/pasta1.jpg',
      price: '16',
      rating: 4
    }
  ]
  constructor(
    private productService    : ProductsService,
    public alertController    : AlertController,
    private router            : Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getProdutcs();
  }

  async getProdutcs(){
    await this.productService.getProducts().subscribe( getProducts => {  
      console.log('getProducts', getProducts);
      this.products = getProducts;
    });
  }

  async deleteAlert(id){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: '¿ Estas seguro que deseas eliminar este producto ?',
      buttons: [
        {
          text: 'Carcelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.productService.deleteProducts(id).subscribe( async getProducts => {  
              if (getProducts){
                await this.getProdutcs();
              }
            }, err => console.log(err));
          }
        }
      ]
    });
    await alert.present();
  }


  updateProduct(data){
    this.router.navigate(['/tabs/tabs/add-plates/', data])
  }
}
