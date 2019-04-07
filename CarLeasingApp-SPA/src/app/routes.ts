import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {CarsComponent} from './components/cars/cars.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
