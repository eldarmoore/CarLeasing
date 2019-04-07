import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: HomeComponent},
  {path: 'cars', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
