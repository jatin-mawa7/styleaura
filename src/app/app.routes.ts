import { Routes } from '@angular/router';
import Home from './home/home';
import { About } from './about/about';
import { Ourproducts } from './ourproducts/ourproducts';
import {Contactform} from './contactform/contactform';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'ourproducts', component: Ourproducts },
  { path: 'contactform', component: Contactform },
  { path: '**', redirectTo: '' }
];
