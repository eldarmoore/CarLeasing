import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.snackBar.open('Logged in successfully', 'x', {duration: 2000});
    }, error => {
      this.snackBar.open(error, 'x', {duration: 2000});
    }, () => {
      this.router.navigate(['/cars']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.snackBar.open('logged out', 'x', {duration: 2000, panelClass: ['blue-snackbar']});
    this.router.navigate(['/home']);
  }
}

