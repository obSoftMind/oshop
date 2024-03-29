import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  appUser! : AppUser;
  constructor(public auth: AuthService){
    auth.appUser$.subscribe( appUser => this.appUser = appUser as AppUser)
  }
 
  logout(){
    this.auth.logout();
  }
}
