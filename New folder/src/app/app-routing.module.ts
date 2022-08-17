import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  {
    path: 'dashboard',  component: DashboardComponent, canActivate:[AuthenticationGuard],
    children: [
      { path: '', redirectTo: "/dashboard/getallnotes", pathMatch: 'full' },
      { path: 'getallnotes', component: GetallnotesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
