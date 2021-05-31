import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Users } from '../../models/users';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      public http             : HttpClient,
      public router           : Router,
      public route            : ActivatedRoute,
      private authService     : UsersService,
      private fb              : FormBuilder,
      public alertController  : AlertController,
      public menuCtrl         : MenuController
    ) { }

    loginForm: FormGroup;


  async ngOnInit() {
   /*  document.getElementById("tabs").style.display="None"; */
    this.loginForm = this.fb.group({
      email: ['',  [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['',[Validators.required, Validators.minLength(4)]],
    });
    this.loginForm.reset();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  get registerFormControl() {
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log(this.loginForm.value.email);
    if (this.loginForm.valid) {
      let dataUser = this.loginForm.value;
      this.authService.loginUser(dataUser).subscribe(async loginUser => {
        let userSesion = loginUser.userFound;
        localStorage.setItem("userSession", JSON.stringify(loginUser));
        if (userSesion.status == 'admin'){
          this.router.navigate(['/tabs/tabs/home-chef']);  
        }else{
          this.router.navigate(['/tabs/tabs/home']);  
        }
      }, async (err) => {
        console.log(err.error.message);
          let alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Atención!',
            message: err.error.message,
            buttons: [
              {
                text: 'Aceptar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                }
              }
            ]
          }); 
        await alert.present();
      }) 
    }
  }
}
