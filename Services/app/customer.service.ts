import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
import { CustomerComponent } from './customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:Http) { }
  searchCust (id:number):Observable<Customer>
  {
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer/"+id).
    map((res:Response)=>res.json())
  }
 
  showCustomer() : Observable< Customer[]> {
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer/show").
    map((res:Response)=>res.json())
  }

}
