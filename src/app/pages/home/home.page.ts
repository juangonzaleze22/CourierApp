import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  search: boolean = false;
  inicio: boolean = true;
  productos: boolean = false;
  restaurantes: boolean = false;
  categorias: boolean = false;
  slideOpts = {
    slidesPerView: 2,
    pagination: false,
    spaceBetween: 15,
  };
  masVendidos= [
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
  recientes= [
    {
      id: 0,
      title: 'Producto 1',
      text: 'lorem ipsum asdasdasd',
      img: 'assets/test/pasta1.jpg',
      price: '10',
      rating: 5
    },
    {
      id: 1,
      title: 'Producto 2',
      text: 'lorem ipsum a',
      img: 'assets/test/pasta2.jpg',
      price: '20',
      rating: 4
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
      rating: 4
    },
    {
      id: 4,
      title: 'Producto 5',
      text: 'description',
      img: 'assets/test/pasta1.jpg',
      price: '16',
      rating: 1
    }
  ]
  promocion= [
    {
      id: 0,
      title: 'Producto 1',
      text: 'lorem ipsum asdasdasd',
      img: 'assets/test/pasta1.jpg',
      price: '10',
      rating: 3
    },
    {
      id: 1,
      title: 'Producto 2',
      text: 'lorem ipsum a',
      img: 'assets/test/pasta2.jpg',
      price: '20',
      rating: 5
    },
    {
      id: 2,
      title: 'Producto 3',
      text: 'lorem ipsum alorem ipsum a',
      img: 'assets/test/plato1.jpg',
      price: '15',
      rating: 4
    },
    {
      id: 3,
      title: 'Producto 4',
      text: 'lorem ipsum a 2',
      img: 'assets/test/rest1.jpg',
      price: '12',
      rating: 4
    },
    {
      id: 4,
      title: 'Producto 5',
      text: 'description',
      img: 'assets/test/pasta1.jpg',
      price: '16',
      rating: 2
    }
  ]


  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
    console.log(this.masVendidos)
  }


  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log('qloq');
  }

  /* Slide Más vendidos */
 
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    var status = ev.detail.value;

    if (status == 'inicio'){
      this.inicio = true;
      this.productos = false;
      this.restaurantes = false;
      this.categorias = false;
    }
    if (status == 'productos'){
      this.inicio = false;
      this.productos = true;
      this.restaurantes = false;
      this.categorias = false;
    }
    if (status == 'restaurantes'){
      this.inicio = false;
      this.productos = false;
      this.restaurantes = true;
      this.categorias = false;
    }
    if (status == 'categorias'){
       this.inicio = false;
      this.productos = false;
      this.restaurantes = false;
      this.categorias = true;
    }
  }

}
