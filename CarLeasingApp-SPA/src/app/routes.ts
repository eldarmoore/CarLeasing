import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {CarsComponent} from './components/cars/cars.component';
import {AuthGuard} from './guards/auth.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
      {path: 'cars', component: CarsComponent}
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
