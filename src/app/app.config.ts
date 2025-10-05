import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import firebaseJson from '../../firebase.json';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();

      if (environment.useEmulators) {
        try {
          connectFirestoreEmulator(
            firestore,
            'localhost',
            firebaseJson?.emulators?.firestore?.port,
          );
        } catch (error) {
          console.error('Error connecting to Firestore emulator:', error);
        }
      }

      return firestore;
    }),
  ],
};
