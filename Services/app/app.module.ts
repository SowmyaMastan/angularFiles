import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploysearchComponent } from './employsearch/employsearch.component';
import { FormsModule } from '@angular/forms';
import { CustomersearchComponent } from './customersearch/customersearch.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'customer',component:CustomerComponent,outlet:'data'},
  {path:'user',component:UserComponent,outlet:'data'},
  {path:'employsearch',component:EmploysearchComponent,outlet:'data'},
  {path:'usersearch',component:UsersearchComponent,outlet:'data'},
  {path:'customersearch',component:CustomersearchComponent,outlet:'data'},
  
  ]
}
]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploysearchComponent,
    CustomersearchComponent,
    UsersearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
