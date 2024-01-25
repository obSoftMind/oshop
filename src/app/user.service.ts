import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import * as firebase from 'firebase/auth'
import { AppUser } from './models/app-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User) {
    this.db.doc('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email
    }, { merge: true })
      .then(() => console.log('user saved successfully'))
      .catch((reason: any) => console.log('user save failed:', reason));
  }

  get(uid: string):AngularFirestoreDocument<AppUser>{
    return this.db.doc('/users/' + uid);
  }
}
