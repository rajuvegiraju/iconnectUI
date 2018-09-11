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
      'placementOfficer': ['', Validators.required],
      'poMobile': ['', Validators.required],
      'poEmail': ['', Validators.required],
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
        this.selectedData = response.payload.college;
        this.addCollegeForm.setValue({
          name: this.selectedData.name,
          placementOfficer:this.selectedData.placementOfficer,
          poMobile:this.selectedData.poMobile,
          poEmail:this.selectedData.poEmail,
          address1:this.selectedData.address1,
          location:this.selectedData.location,
          country:this.selectedData.country,
          state:this.selectedData.state,
          university:this.selectedData.university,
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
    if (this.paramId) {
      this._iconnectService.updateNewCollege(this.addCollegeForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/collegeAdmin/collegeList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.addNewCollege(this.addCollegeForm.value).subscribe(response => {
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
