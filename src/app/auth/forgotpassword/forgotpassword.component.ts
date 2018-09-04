import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  username:any;
  constructor(private _iconnect:IconnectService, private router:Router, private snackServ:SnackbarService) { }

  ngOnInit() {
  }
  forgot(){
    let payload = {
      username: this.username
    }
    this._iconnect.forgotPasswordService(payload).subscribe(response => {
      if(response.resCode== 1){
        this.snackServ.success("We have sent an Email with password to your registered email.");
        this.router.navigate(['superAdmin/login']);
      }
    })
  }

   onLogin() {
     this.router.navigate(['/login']);
  }
}
