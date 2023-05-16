import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router,
            private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onLogin(user: { username: string, password: string }) {
   //this.afAuth.createUserWithEmailAndPassword(user.username, user.password);
  this.afAuth.signInWithEmailAndPassword(user.username, user.password)
    .then(() => {
      this.router.navigateByUrl('/menu/home');
    })
    .catch((error) => {
      console.log('Login error:', error);
      this.router.navigateByUrl('/login');
    });
}

}
