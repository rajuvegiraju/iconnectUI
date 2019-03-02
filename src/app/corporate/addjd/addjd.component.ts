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
  locationList : any;
  percentageList: any;
  dashMessage: String;
  selectedData: any;
  modeOfInterviewList: any ={};
  courceList:any =[];
  jobTypeList:any = {};
  jobPositionList:any =["Sr Software", "Freshers"];
  keySkills: string[] = ['Java', 'Angular js', 'Javascript', 'Html5', 'Css3', 'Reactjs'];

  jd = {};



  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {

    this.createJDForm = this._formBuilder.group({
      'jobId': [''],
      'jobPosition': [''],
      'jobType': [''],
      'courceId': [''],
      'cource': [''],
      'percentage':[''],
      'vacancies': [''],
      'salary': [''],
      'keySkillsList': [''],
      'description': [''],
      'roundsOfInterview':[''],
      'country': [''],
      'countryName':[''],
      'state': [''],
      'stateName':[''],
      'location': [''],
      'locationId':['']
    });

    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.getJobDetails(this.paramId).subscribe(response => {
        this.selectedData = response.payload.job;
        this.createJDForm.setValue({
          jobId:this.selectedData.jobId,
          jobPosition: this.selectedData.jobPosition,
          jobType:this.selectedData.jobType,
          cource:this.selectedData.cource,
          percentage:this.selectedData.percentage,
          vacancies:this.selectedData.vacancies,
          salary:this.selectedData.salary,
          keySkillsList:this.selectedData.keySkillsList,
          description:this.selectedData.description
          
          
        });
        
      })
    }
    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this._iconnectService.getLocationDetails().subscribe(response => {
      this.locationList = response.payload.location;
    })
    this._iconnectService.getJobType().subscribe(response => {
      this.jobTypeList = response.payload.jobtype;
    })
    this._iconnectService.getCources().subscribe(response => {
      this.courceList = response.payload.cources;
    })
    this._iconnectService.getPercentage().subscribe(response => {
      this.percentageList = response.payload.percentage;
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
   debugger;

   var job = this.createJDForm.value;
       



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

  changState(state) {
    this._iconnectService.getLocationDetailsByState(state.stateId).subscribe(response => {
      this.locationList = response.payload.location;
    })
  }

}
