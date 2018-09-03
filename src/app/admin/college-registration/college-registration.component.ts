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
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createCollegeForm = this._formBuilder.group({
      'id': [''],
      'name': ['', Validators.required],
      'contactPerName': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'address1': ['', Validators.required],
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
          id:this.selectedData.id,
          name: this.selectedData.name,
          contactPerName:this.selectedData.contactPerName,
          mobileNumber:this.selectedData.mobileNumber,
          email:this.selectedData.email,
          address1:this.selectedData.address1,
          address2:this.selectedData.address2,
          country:this.selectedData.country,
          state:this.selectedData.state
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

  onSubmit() {
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
  }

}
