import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';


@Component({
  selector: 'app-corporate-registration',
  templateUrl: './corporate-registration.component.html',
  styleUrls: ['./corporate-registration.component.css']
})
export class CorporateRegistrationComponent implements OnInit {

  createCorporateForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  paramId:any;
  selectedData:any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route:ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createCorporateForm = this._formBuilder.group({
      'id': [''],
      'name': ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
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
  alert(this.paramId);
    if(this.paramId === 'volvo' || this.paramId === 'xyz'){

     this._iconnectService.pendingApprovalById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.corporate;
        this.createCorporateForm.setValue({
          id:this.selectedData.id,
          name: this.selectedData.organization,
          contactPerName:this.selectedData.name,
          mobileNumber:this.selectedData.mobile,
          email:this.selectedData.email,
          
        });
      })

    }else if (this.paramId) {
      this._iconnectService.corporateListById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.corporate;
        this.createCorporateForm.setValue({
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
      this._iconnectService.updateCorporate(this.createCorporateForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/superAdmin/corporateList');
          this.dataService.navData("Corporate");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.createCorporate(this.createCorporateForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Registered");
          this.router.navigateByUrl('/superAdmin/corporateList');
          this.dataService.navData("Corporate");
        }else{
          this._snackBar.error("Registration Unsuccessful");
        }
      })
    }
  }
      
}
