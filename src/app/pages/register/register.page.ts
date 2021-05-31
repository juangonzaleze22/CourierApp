import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users/users.service';
import { ServiceService } from '../../services/service.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit { 
  
  registerForm: FormGroup;
  submitted = false;
  messageAlert: string;
  showPassword: false;
  showConfirmPassword: false;

  constructor(
    private authService     : UsersService,
    public router           : Router,
    public route            : ActivatedRoute,
    public http             : HttpClient,
    public service          : ServiceService,
    private fb              : FormBuilder,
    public alertController  : AlertController
  ) {  }



    
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['',  [Validators.required,Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['',  [Validators.required, Validators.email]],
      username: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, this.authService.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.authService.MatchPassword('password', 'confirmPassword'),
      }
    );
    this.registerForm.reset();
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let dataUser = this.registerForm.value;
      dataUser.status = 'admin';
      console.log('dataUser', dataUser)
      this.authService.registerUser(dataUser).subscribe(async userCreated => {  
        JSON.stringify(userCreated);
        console.log('===>', userCreated);
         if (userCreated){
          this.messageAlert = userCreated.message
          let alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: '¡Felicidades!',
            message: this.messageAlert,
            buttons: [
              {
                text: 'Aceptar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.registerForm.reset();
                  this.router.navigate(['/']);  
                }
              }
            ]
          }); 
          await alert.present();
        }
      }, async (err) => {
        console.log(err.error.message);
        this.messageAlert = err.error.message
          let alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: '¡Atención!',
            message: this.messageAlert,
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
