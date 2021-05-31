import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( 
      public http           : HttpClient,
    ) {}
}

export default ServiceService;