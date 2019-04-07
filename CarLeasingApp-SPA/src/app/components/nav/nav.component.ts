import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.snackBar.open('Logged in successfully', 'x', {duration: 2000});
    }, error => {
      this.snackBar.open(error, 'x', {duration: 2000});
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.snackBar.open('logged out', 'x', {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
}

