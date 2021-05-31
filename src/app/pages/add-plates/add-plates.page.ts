import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ProductsService } from '../../services/products/products.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-plates',
  templateUrl: './add-plates.page.html',
  styleUrls: ['./add-plates.page.scss'],
})
export class AddPlatesPage implements OnInit {
  public productForm: FormGroup;
  dualValue2;
  alertImg = false;
  productId= null;
  photoParams = [];
  slideOpts = {
    slidesPerView: 3,
    pagination: false,
    spaceBetween: 15,
  };

  public formProduct: FormGroup; 

  constructor(
    private formBuilder       : FormBuilder,
    private productService    : ProductsService,
    private _location         : Location,
    private router            : Router,
    public alertController    : AlertController,
    private activatedRoute    : ActivatedRoute
    ) { 
    
  }

  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.productId){
      this.productService.getProductsById(this.productId).subscribe(async data => {  
        this.formProduct = this.formBuilder.group({
          name: [data.name, Validators.required],
          description: [data.name],
          price: [data.price, Validators.required],
          comment: [data.comment],
          photos: this.formBuilder.array([])
        });
      this.photos.push(this.createItem({
        url : data.photos
      }));
      console.log(this.formProduct);
      });
    }else{
    }
    this.formProduct = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      comment: [''],
      photos: this.formBuilder.array([])
    });
  }

  // We will create multiple form controls inside defined form controls photos.
  createItem(data): FormGroup {
      return this.formBuilder.group(data);
  }

  //Help to get all photos controls as form array.
  get photos(): FormArray {
    return this.formProduct.get('photos') as FormArray;
  };

  detectFiles(event) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        if(file.size > 50000){
          this.alertImg = true;
        }else{
          this.alertImg = false;
          let reader = new FileReader();
          reader.onload = (e: any) => {
              this.photos.push(this.createItem({
                  file,
                  url: e.target.result  //Base64 string for preview image
              }));
          }
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removePhoto(i){
		this.photos.removeAt(i);
	}

  onSubmit() {
   let userSession = JSON.parse(localStorage.getItem("userSession"));
    let dataProduct = this.formProduct.value;
    console.log(this.formProduct);
    dataProduct.token = userSession.token;
    dataProduct.userId = userSession.userFound._id;
    if (this.formProduct.valid) {
      this.productService.registerProducts(dataProduct).subscribe(async productCreated => {  
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alerta',
          message: 'El producto fue creado correctamente',
          buttons: ['Aceptar']
        });
        await alert.present();
        this.router.navigate(['/tabs/tabs/home-chef']);
      });
    }else{

    }
  }

  back(){
    this._location.back();
  }

}
