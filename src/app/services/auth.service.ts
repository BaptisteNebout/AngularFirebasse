import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, user, User } from '@angular/fire/auth';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root' // Standalone service
})
export class AuthService {
  private auth = inject(Auth); // 🚀 Injection sans NgModule
  user$: Observable<User | null> = user(this.auth);

  // 🔑 Connexion avec Email/Password
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // 📩 Inscription avec Email/Password
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // ❌ Déconnexion
  logout() {
    return from(signOut(this.auth));
  }

  // 👤 Observer l'état de connexion
  getUser(): Observable<any> {
    return new Observable(subscriber => {
      onAuthStateChanged(this.auth, user => subscriber.next(user));
    }).pipe(map(user => user ? user : null));
  }
}