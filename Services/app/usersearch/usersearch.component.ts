import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {

id:number;
user:Observable<User>;
  constructor(private _userservice:UserService) { }
searchuser()
{
  this.user=this._userservice.searchuser(this.id);
}

  ngOnInit(): void {
  }

}
