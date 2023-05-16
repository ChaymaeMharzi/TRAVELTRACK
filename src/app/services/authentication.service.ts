import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated:boolean | undefined;
  public token:string = '';
  getUserData: any;

  constructor(private afAuth: AngularFireAuth) { }

  logout() {
    this.afAuth.signOut();
  }

    private saveToken() {
        this.token="azerty";
        localStorage.setItem("myToken",this.token);
    }

    public loadToken(){
      this.token =localStorage.getItem("myToken") ?? '';
      if(this.token=='azerty'){
        this.authenticated=true;
      }
      else{
        this.authenticated=false;
      }
      return this.authenticated;
    }

    // logout() {
    //     localStorage.removeItem('myToken');
    // }
}
