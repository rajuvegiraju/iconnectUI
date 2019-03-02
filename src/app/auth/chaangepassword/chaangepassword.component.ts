import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-chaangepassword',
  templateUrl: './chaangepassword.component.html',
  styleUrls: ['./chaangepassword.component.css']
})
export class ChaangepasswordComponent implements OnInit {

 oldPassword: any;
 newPassword: any;
 confirmPassword: any;
 
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
   }

  ngOnInit() {
   
  }

  onSubmit() {
    let payload = {
        newPassword: this.newPassword,
        oldPassword: this.oldPassword
      }
      this._iconnectService.changePassword(payload).subscribe(response => {
        if (response.resCode == "1") {
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
          this._snackBar.success(response.payload.message);

        } else {
          this._snackBar.error("Registration Unsuccessful");
        }
      })
  }
  

}
