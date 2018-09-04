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
        debugger;
          this.snackServ.success("Logged in Successfully");
          if("iconnect" === response.payload.template){
            this.router.navigate(['superAdmin']);
          }else if("college" === response.payload.template){
            this.router.navigate(['collegeAdmin']);
          }else if("corporate" === response.payload.template){
            this.router.navigate(['corporateAdmin']);
          }else{
            this.router.navigate(['superAdmin']);
          }
          
          
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
