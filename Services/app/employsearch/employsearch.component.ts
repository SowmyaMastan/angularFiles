import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employsearch',
  templateUrl: './employsearch.component.html',
  styleUrls: ['./employsearch.component.css']
})
export class EmploysearchComponent implements OnInit {
empno:number;
employ:Observable<Employ>;
  constructor(private _employservice:EmployService) { }
search()
{
  this.employ=this._employservice.searchEmploy(this.empno);
}
  ngOnInit(): void {
  }

}
