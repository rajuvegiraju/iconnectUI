import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { IconnectService } from '../iconnect.service';
import { DataService } from '../datachange.service';
import { SnackbarService } from '../snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { ChaangepasswordComponent } from './chaangepassword/chaangepassword.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers:[IconnectService,DataService,SnackbarService],
  exports: [ForgotpasswordComponent, SignupComponent, LoginComponent],
  declarations: [ForgotpasswordComponent, SignupComponent, LoginComponent, SignupSuccessComponent, ChaangepasswordComponent]
})
export class AuthModule { }
