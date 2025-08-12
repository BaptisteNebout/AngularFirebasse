import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent/*, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/},
    {path: 'login', component : LoginComponent/*, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/, },
];
