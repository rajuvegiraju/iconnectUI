import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private _iconnect: IconnectService, private router: Router, private snackServ: SnackbarService) { }

  ngOnInit() {
  }
  login() {
    if (this.username && this.password) {
      let payload = {
        mobile: this.username,
        password: this.password
      }
      this._iconnect.loginService(payload).subscribe(response => {
        if (response.resCode == 1) {
          this.snackServ.success("Logged in Successfully");
          if("iconnect" === response.payload.template){
            this.router.navigate(['superAdmin']);
          }else if("college" === response.payload.template){
            this.router.navigate(['collegeAdmin']);
          }else if("collegeChangePassword" === response.payload.template){
            this.router.navigate(['collegeAdmin/changePassword']);
          }else if("corporate" === response.payload.template){
            this.router.navigate(['corporateAdmin']);
          }else if("corporateChangePassword" === response.payload.template){
            this.router.navigate(['corporateAdmin/changePassword']);
          }else if("pOfficer" === response.payload.template){
            this.router.navigate(['po']);
          }else if("poChangePassword" === response.payload.template){
            this.router.navigate(['po/changePassword']);
          }else if("student" === response.payload.template){
            this.router.navigate(['student']);
          }else if("studentChangePassword" === response.payload.template){
            this.router.navigate(['student/changePassword']);
          }else if("HR" === response.payload.template){
            this.router.navigate(['hr']);
          }else if("hrChangePassword" === response.payload.template){
            this.router.navigate(['hr/changePassword']);
          }else{
            this.router.navigate(['superAdmin']);
          }
          
          
        }else{
          this.snackServ.error(response.mesgStr);
        }
      })
    }else{
      this.snackServ.error("Fields should not be empty");
    }
  }

  onSignUP() {
     this.router.navigate(['/signup']);
  }

  onForgot() {
     this.router.navigate(['/forgotpassword']);
  }
}
