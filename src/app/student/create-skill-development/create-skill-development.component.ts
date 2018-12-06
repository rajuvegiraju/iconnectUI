import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-create-skill-development',
  templateUrl: './create-skill-development.component.html',
  styleUrls: ['./create-skill-development.component.css']
})
export class CreateSkillDevelopmentComponent implements OnInit {

  createSkillDevForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  paramId:any;
  selectedData:any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route:ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createSkillDevForm = this._formBuilder.group({
      'industry': ['', Validators.required],
      'skillDevelopment': ['', Validators.required],
      'lesson': ['', Validators.required],
      'noOfUnits': ['', Validators.required],
      'duration': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.paramId) {
      this._iconnectService.updateCorporate(this.createSkillDevForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/superAdmin/corporateList');
          this.dataService.navData("Corporate");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.createCorporate(this.createSkillDevForm.value).subscribe(response => {
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
