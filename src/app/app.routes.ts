// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignaturesComponent } from './signatures/signatures.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signatures', component: SignaturesComponent }
];

