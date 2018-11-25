import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { SnackbarService } from '../../snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  placementForm: FormGroup;
  department: any;
  displayedColumns: string[] = ['number', 'departmentName', 'actions'];
  dataSource: any = [];
  countryList: any;
  stateList: any;
  universityList: any;
  selectedData: any;

  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.placementForm = this._formBuilder.group({
      'name': [''],
      'mobile': [''],
      'email': [''],
      'university': [''],
      'collegeName': [''],
      'country': [''],
      'state': [''],
      'city': [''],
      'address1': [''],
      'location': [''],
      'schemeType': [''],
      'course': [''],
      'stream': [''],
      'collegeAddress': [''],
      'collegeContact': [''],
      'principalName': [''],
      'principalContact': [''],
      'principalEmail': [''],
    });
  }

  ngOnInit() {
    this._iconnectService.getPOProfileDetails().subscribe(response => {
      this.selectedData = response.payload.profile;
      if (this.selectedData) {
        this.placementForm.setValue({
          name: this.selectedData.name,
          mobile: this.selectedData.mobile,
          email: this.selectedData.email,
          university: this.selectedData.university,
          collegeName: this.selectedData.collegeName,
          country: this.selectedData.country,
          state: this.selectedData.state,
          address1: this.selectedData.address1,
          city: this.selectedData.city,
          schemeType: this.selectedData.schemeType,
          course: this.selectedData.course,
          stream: this.selectedData.stream,
          collegeAddress: this.selectedData.collegeAddress,
          collegeContact: this.selectedData.collegeContact,
          principalName: this.selectedData.principalName,
          principalContact: this.selectedData.principalContact,
          principalEmail: this.selectedData.principalEmail,
          location: this.selectedData.location
        });
      }
    })

    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this._iconnectService.getUniversityDetails().subscribe(response => {
      this.universityList = response.payload.universities;
    })

  }
  addDept(data) {
    if (data) {
      let dataObj = {
        departName: this.department
      };
      this._iconnectService.addDepartment(dataObj).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          //this.router.navigateByUrl('/po');
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
      // this.dataSource.push(dataObj);
    } else {
      this._snackBar.error("Department name should not be empty");
    }
  }
  deleteData(data) {
    this._iconnectService.deleteData(data).subscribe(response => {
      if (response.resCode == "1") {
        this._snackBar.success("Successfully Updated");
        this.dataSource = response.data;
      } else {
        this._snackBar.error("Error in Updation");
      }
    })
  }

  onSubmit(valid) {
    if (valid) {
      console.log(this.placementForm.value);
      this._iconnectService.updatePOProfileDetails(this.placementForm.value).subscribe(response => {
        alert(response);
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/po');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    }else{
      this._snackBar.error("Please enter mandatory fields");
    }
  }

}
