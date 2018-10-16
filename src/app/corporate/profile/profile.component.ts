import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hrForm: FormGroup;

  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;

  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.hrForm = this._formBuilder.group({
    'id':[''],
      'corporateName': [''],
      'industry': [''],
      'corporateWebsite': [''],
      'country': [''],
      'state': [''],
      'location': [''],
      'addessOne':  [''],
      'name': [''],
      'email': [''],
      'mobile': [''],
      'designation': [''],
      'officeNumber': [''],
      'extension': [''],
      'persionalEmail': [''],
      'secoundPCPName': [''],
      'secoundPCPEmail': [''],
      'secoundPCPMobile': [''],
      'secoundPCPDesignation': ['']
    });
  }

  ngOnInit() {
    
    this._iconnectService.getHrProfileDetails().subscribe(response => {
      this.selectedData = response.payload.profile;

      this.hrForm.setValue({
        id:this.selectedData.id,
        corporateName: this.selectedData.corporateName,
        industry:this.selectedData.industry,
        corporateWebsite:this.selectedData.corporateWebsite,
        country:this.selectedData.country,
        state:this.selectedData.state,
        location:this.selectedData.location,
        addessOne:  this.selectedData.addessOne,
        name: this.selectedData.name,
        email: this.selectedData.email,
        mobile: this.selectedData.mobile,
        designation: this.selectedData.designation,
        officeNumber: this.selectedData.officeNumber,
        extension: this.selectedData.extension,
        persionalEmail: this.selectedData.persionalEmail,
        secoundPCPName: this.selectedData.secoundPCPName,
        secoundPCPEmail: this.selectedData.secoundPCPEmail,
        secoundPCPMobile: this.selectedData.secoundPCPMobile,
        secoundPCPDesignation: this.selectedData.secoundPCPDesignation
      });
    })
    
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
      this._iconnectService.updateHrProfile(this.hrForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/hr/all-jobs');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
   }
}
