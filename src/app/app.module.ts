import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { FetchDataService } from './fetch-data.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

// import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    LoginComponent,
    HeaderComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FetchDataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
