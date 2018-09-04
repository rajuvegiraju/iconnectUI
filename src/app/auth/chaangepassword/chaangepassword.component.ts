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
    
      this._iconnectService.changePassword(this.newPassword).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Registered");
          this.router.navigateByUrl('/superAdmin/collegeList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Registration Unsuccessful");
        }
      })
  }
  

}
