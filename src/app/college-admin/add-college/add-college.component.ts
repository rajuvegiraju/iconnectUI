import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  addCollegeForm: FormGroup;
  countryList: any;
  stateList: any;
  universityList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.addCollegeForm = this._formBuilder.group({
      'name': ['', Validators.required],
      'collegeName':['', Validators.required],
      'mobile': ['', Validators.required],
      'email': ['', Validators.required],
      'address1': ['', Validators.required],
      'location': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'university': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.getNewcollegeById(this.paramId).subscribe(response => {
      debugger;
        this.selectedData = response.payload.college;
        this.addCollegeForm.setValue({
          name: this.selectedData.name,
          collegeName:this.selectedData.collegeName,
          mobile:this.selectedData.mobile,
          email:this.selectedData.email,
          address1:this.selectedData.address1,
          location:this.selectedData.location,
          country:this.selectedData.country.name,
          state:this.selectedData.state.name,
          university:this.selectedData.university.name,
          countryID:this.selectedData.country.countryId,
          stateID:this.selectedData.state.stateId,
          universityID:this.selectedData.university.universityId,
        });
      })
    }
    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this._iconnectService.getUniversityDetails().subscribe(response => {
      this.universityList = response.payload.universities;
    })
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = message;
    })
  }

  onSubmit() {
  let college = {
      name: this.addCollegeForm.value.name,
      collegeName:this.addCollegeForm.value.collegeName,
      mobile:this.addCollegeForm.value.mobile,
      email:this.addCollegeForm.value.email,
      address1:this.addCollegeForm.value.address1,
      location:this.addCollegeForm.value.location,
      country:this.addCollegeForm.value.country.name,
      state:this.addCollegeForm.value.state.name,
      university:this.addCollegeForm.value.university.name,
      countryID:this.addCollegeForm.value.country.countryId,
      stateID:this.addCollegeForm.value.state.stateId,
      universityID:this.addCollegeForm.value.university.universityId
    }

  debugger
    if (this.paramId) {
      this._iconnectService.updateNewCollege(college).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/collegeAdmin/collegeList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.addNewCollege(college).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Created.");
          this.router.navigateByUrl('/collegeAdmin/collegeList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error(response.mesgStr);
        }
      })
    }
  }

  Reject() {
   
      this._iconnectService.deleteNewCollege(this.addCollegeForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Created.");
          this.router.navigateByUrl('/collegeAdmin/collegeList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Registration Unsuccessful");
        }
      })
  }

}
