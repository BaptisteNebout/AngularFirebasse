import { Component, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  user = signal<any>(null);

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email(), this.password());
      alert('Connexion réussie !');
    } catch (error) {
      alert(error);
    }
  }

  async register() {
    try {
      await this.authService.register(this.email(), this.password());
      alert('Compte créé avec succès !');
    } catch (error) {
      alert(error);
    }
  }

  async logout() {
    await this.authService.logout();
    alert('Déconnecté !');
  }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.user.set(user));
  }
}