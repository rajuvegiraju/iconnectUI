import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-add-corporate',
  templateUrl: './add-corporate.component.html',
  styleUrls: ['./add-corporate.component.css']
})
export class AddCorporateComponent implements OnInit {

  createCorporateForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  paramId:any;
  selectedData:any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route:ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createCorporateForm = this._formBuilder.group({
      'id': [''],
      'corporateName': ['', Validators.required],
      'name': ['', Validators.required],
      'mobile': ['', Validators.required],
      'email': ['', Validators.required],
      'location': ['', Validators.required],
      'addessOne': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);

  }

  ngOnInit() {

  if (this.paramId) {
      this._iconnectService.getCorporateListById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.corporate;
        debugger;
        this.createCorporateForm.setValue({
          id:this.selectedData.id,
          corporateName: this.selectedData.name,
          name:this.selectedData.name,
          mobile:this.selectedData.mobile,
          email:this.selectedData.email,
          location:this.selectedData.location,
          addessOne:this.selectedData.addessOne,
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
      this._iconnectService.updateNewCorporate(this.createCorporateForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/corporateAdmin/corporateList');
          this.dataService.navData("Corporate");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.addNewCorporate(this.createCorporateForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Registered");
          this.router.navigateByUrl('/corporateAdmin/corporateList');
          this.dataService.navData("Corporate");
        }else{
          this._snackBar.error(response.mesgStr);
        }
      })
    }
  }
      
}
