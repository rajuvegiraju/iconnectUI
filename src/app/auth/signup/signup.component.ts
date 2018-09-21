import { Component, OnInit } from '@angular/core';
import { IconnectService } from '../../iconnect.service';
import { Routes, Router } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signuprole:any;
  username:any;
  mobile:any;
  email:any;
  collegeName:any;
  collegeid:any;
  collegeList:any;
  //isCollege:boolean = false;
  constructor(private _iconnect:IconnectService, private router:Router, private snackServ:SnackbarService) { }

  ngOnInit() {

    this._iconnect.getAllColleges().subscribe(response => {
      this.collegeList = response.payload.collegeList;
    })
  }

  signUP() {
  debugger;
    let payload = {
      type: this.signuprole,
      name: this.username,
      mobile: this.mobile,
      email: this.email,
      organization:this.collegeName,
      collegeId:this.collegeid
    }

    this._iconnect.signUpService(payload).subscribe(response => {
      if (response.resCode == 1) {
        this.snackServ.success("Registered in Successfully");
        this.router.navigate(['signup-success']);
      }else{
       this.snackServ.success(response.payload.message);
      }
    })
  }
}
