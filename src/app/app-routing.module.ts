import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
// import { PayComponent } from './pay/pay.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path:"login",  component: LoginComponent 
  },

  {
    path:"booking", canActivate:[AuthGuard], component: BookingComponent
  },

  {
    path:"**",component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
