import { Component, OnInit, inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, createUserWithEmailAndPassword } from  '@angular/fire/auth';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements  OnInit {
  private  auth: Auth = inject(Auth);
  private  provider = new  GoogleAuthProvider();
  user$ = user(this.auth);
  accessToken: string | null = null;
  email: any;
  password: any;
  constructor() {}  

  ngOnInit() {
    console.log('lui');
    
  } 

  loginWithGoogle() {
    signInWithPopup(this.auth, this.provider).then(result => {
      console.log("Connecté :", result.user);
      this.auth.currentUser?.getIdToken(/* forceRefresh= */ false).then(token => {
        this.accessToken = token;
        console.log("Token d'accès :", this.accessToken);
      }).catch(error => {
        console.error("Erreur de connexion :", error);  
      })
    })
    .catch(error => console.error("Erreur de connexion :", error));
  }

  logout() {
    signOut(this.auth).then(() => {
      console.log('signed out');
    }).catch((error) => {
        console.log('sign out error: ' + error);
    })
  }

  // 📩 Inscription avec Email/Password
  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {});
  }
}