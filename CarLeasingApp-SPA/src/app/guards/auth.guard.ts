import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.snackBar.open('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
