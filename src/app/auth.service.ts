import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth'; 
import { ActivatedRoute } from '@angular/router';
import { Observable,of, switchMap } from 'rxjs';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$!: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) { 
    this.user$ = afAuth.authState as Observable<firebase.User>; 
  }
  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.signOut();
  }
  
  get appUser$() : Observable<AppUser | null | undefined>{
    return this.user$
    .pipe(
      switchMap(user => {
        if(user) return this.userService.get(user.uid).valueChanges();
        return of(null)
      }),
    )
  }
}


