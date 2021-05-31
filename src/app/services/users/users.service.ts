import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Users } from '../../models/Users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL: string = 'http://127.0.0.1:5005';

  constructor(
    private http:     HttpClient
  ) {}

  postUserLogin(data){
    const path = 'http://127.0.0.1:5005/api/auth/login';
    return this.http.post(path, data);
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  userNameValidator(userControl: AbstractControl) {
    console.log('===>', this.getUser())
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

   validateUserName(userName: string) {
    let user: any = [];
    user = this.getUser();
    console.log('------>',user, userName);

    return user.filter(result => result.username == userName);
  }


  async getUser(){
    await this.http.get(this.apiURL+'/api/users')
    .subscribe(data => {   // data is already a JSON object for
      console.log(data);
      return data;
    });
  }

  /* Register */

  registerUser(users: Users): Observable<Users>{
   return this.http.post<Users>(this.apiURL+'/api/auth/register', users)
  }

  loginUser(user): Observable<any>{
    return this.http.post<Users>(this.apiURL+'/api/auth/login', user)
   }

}
