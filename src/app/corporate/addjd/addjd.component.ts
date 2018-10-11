import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';


@Component({
  selector: 'app-addjd',
  templateUrl: './addjd.component.html',
  styleUrls: ['./addjd.component.css']
})
export class AddjdComponent implements OnInit {

  createJDForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  modeOfInterviewList: any =["Telephone", "F2F"];
  courceList:any = ["B.Tech", "B.SC"];
  jobTypeList:any = ["Perminent", "Contract"];
  jobPositionList:any =["Sr Software", "Freshers"];
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.createJDForm = this._formBuilder.group({
      'id': [''],
      'jobPosition': ['', Validators.required],
      'jobType': ['', Validators.required],
      'cource': ['', Validators.required],
      'percentage': ['', Validators.required],
      'vacancies': ['', Validators.required],
      'salary': ['', Validators.required],
      'skill': ['', Validators.required],
      'roundsOfInterview':['', Validators.required],
      'description': ['', Validators.required],
      'location': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.collegeListById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.college;
        this.createJDForm.setValue({
          id:this.selectedData.id,
          jobPosition: this.selectedData.jobPosition,
          jobType:this.selectedData.jobType,
          cource:this.selectedData.cource,
          percentage:this.selectedData.percentage,
          vacancies:this.selectedData.vacancies,
          salary:this.selectedData.salary,
          skill:this.selectedData.skill,
          description:this.selectedData.description,
          location:this.selectedData.location,
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
      this._iconnectService.updateNewJob(this.createJDForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/hr/all-jobs');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {
      this._iconnectService.createNewJob(this.createJDForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Created");
          this.router.navigateByUrl('/hr/all-jobs');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    }
  }


}
