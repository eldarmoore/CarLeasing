import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatInputModule, MatMenuModule, MatFormFieldModule } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CarouselComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule, MatCheckboxModule, MatListModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatInputModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatCarouselModule, MatDialogModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
