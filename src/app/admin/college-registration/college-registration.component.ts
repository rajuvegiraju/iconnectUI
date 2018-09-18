import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';


@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.css']
})
export class CollegeRegistrationComponent implements OnInit {

  createCollegeForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  account_validation_messages = {
    'name': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  }
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createCollegeForm = this._formBuilder.group({
      'id': [''],
      'name': ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      'contactPerName': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'address1': ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      'address2': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.collegeListById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.college;
        this.createCollegeForm.setValue({
          id: this.selectedData.id,
          name: this.selectedData.name,
          contactPerName: this.selectedData.contactPerName,
          mobileNumber: this.selectedData.mobileNumber,
          email: this.selectedData.email,
          address1: this.selectedData.address1,
          address2: this.selectedData.address2,
          country: this.selectedData.country,
          state: this.selectedData.state
        });
      })
    }
    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = message;
    })
  }

  onSubmit(valid) {
    if (valid) {
      if (this.paramId) {
        this._iconnectService.updateCollege(this.createCollegeForm.value).subscribe(response => {
          if (response.resCode == "1") {
            this._snackBar.success("Successfully Updated");
            this.router.navigateByUrl('/superAdmin/collegeList');
            this.dataService.navData("College");
          } else {
            this._snackBar.error("Error in Updation");
          }
        })
      } else {
        this._iconnectService.createCollege(this.createCollegeForm.value).subscribe(response => {
          if (response.resCode == "1") {
            this._snackBar.success("Successfully Registered");
            this.router.navigateByUrl('/superAdmin/collegeList');
            this.dataService.navData("College");
          } else {
            this._snackBar.error("Registration Unsuccessful");
          }
        })
      }
    }else{
      console.log("Hello error");
    }
  }

}
