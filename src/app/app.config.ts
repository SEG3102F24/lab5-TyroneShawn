import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
const firebaseConfig = {
  apiKey: "AIzaSyAcByPdrNUcwYFALnnrNBDSkopwG-FYfyY",
  authDomain: "lab5seg3102-1a76c.firebaseapp.com",
  projectId: "lab5seg3102-1a76c",
  storageBucket: "lab5seg3102-1a76c.appspot.com",
  messagingSenderId: "268139039967",
  appId: "1:268139039967:web:5608aaf72f7a2c28252d6a",
  measurementId: "G-57ZEQ8F463"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),]
};
