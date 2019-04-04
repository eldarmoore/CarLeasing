import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './components/value/value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatListModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
