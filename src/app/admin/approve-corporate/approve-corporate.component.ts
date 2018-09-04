import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';


@Component({
  selector: 'app-approve-corporate',
  templateUrl: './approve-corporate.component.html',
  styleUrls: ['./approve-corporate.component.css']
})
export class ApproveCorporateComponent implements OnInit {

  createCorporateForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createCorporateForm = this._formBuilder.group({
      'id': [''],
      'name': ['', Validators.required],
      'contactPerName': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'address1': [''],
      'address2': [''],
      'country': [''],
      'state': ['']
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
    debugger;
      this._iconnectService.pendingApprovalById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.pendingApproval;
        this.createCorporateForm.setValue({
          id:this.selectedData.id,
          name: this.selectedData.organization,
          contactPerName:this.selectedData.name,
          mobileNumber:this.selectedData.mobile,
          email:this.selectedData.email,
          address1:'',
          address2:'',
          country:'',
          state:''
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
   
      this._iconnectService.createCorporate(this.createCorporateForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Registered");
          this.router.navigateByUrl('/superAdmin/pendingApproval');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Registration Unsuccessful");
        }
      })
  }
 }
