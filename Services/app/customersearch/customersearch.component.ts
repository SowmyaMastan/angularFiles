import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customersearch',
  templateUrl: './customersearch.component.html',
  styleUrls: ['./customersearch.component.css']
})
export class CustomersearchComponent implements OnInit {

id:number;
customer:Observable<Customer>;
  constructor(private _customerservice:CustomerService) { }
searchCust()
{
  this.customer=this._customerservice.searchCust(this.id);
}

  ngOnInit(): void {
  }

}
