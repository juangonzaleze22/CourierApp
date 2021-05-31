import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mode',
  templateUrl: './mode.page.html',
  styleUrls: ['./mode.page.scss'],
})
export class ModePage implements OnInit {

  idMode;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  test(id){
    this.idMode  = id;
    console.log('===>', this.idMode)
    localStorage.setItem('idMode', this.idMode);

    if (this.idMode == 1){
      this.router.navigate(['tabs/tabs/home']);
    }
    if (this.idMode == 2){
      this.router.navigate(['tabs/tabs/home-chef']);
    }
    if (this.idMode == 3){
      /* this.router.navigate(['tabs/tabs/home-chef']); */
    }
  }

}
