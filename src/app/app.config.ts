import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
    providers: [
      provideFirebaseApp(() => initializeApp(environment.firebase)), // 🔥 Initialise Firebase
      provideAuth(() => getAuth()), // 🔑 Authentification Firebase
    ]
};