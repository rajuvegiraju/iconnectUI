import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { ChaangepasswordComponent } from './chaangepassword/chaangepassword.component';

const routes: Routes = [
	{	path: 'login',	component: LoginComponent },
  {	path: 'signup',	component: SignupComponent },
  {	path: 'forgotpassword',	component: ForgotpasswordComponent }	 ,
  {	path: 'signup-success',	component: SignupSuccessComponent }	,
  {	path: 'changepassword',	component: ChaangepasswordComponent }	 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
