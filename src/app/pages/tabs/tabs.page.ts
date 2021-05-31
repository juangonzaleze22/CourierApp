import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  idMode = 2;
  constructor() {}

  ngOnInit(){
    /* this.idMode = localStorage.getItem('idMode');
    console.log('idMode', this.idMode); */
  }

}
