import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-add-internship',
  templateUrl: './add-internship.component.html',
  styleUrls: ['./add-internship.component.css']
})
export class AddInternshipComponent implements OnInit {

  newInternshipForm: FormGroup;
  countryList: any;
  stateList: any;
  percentageList: any;
  courceList:any =[];
  modeOfInterviewList: any =["Telephone", "F2F"];
  dashMessage: String;
  selectedData: any;
  locationList : any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.newInternshipForm = this._formBuilder.group({
      'internshipId': [''],
      'projectTitle': [''],
      'duration': [''],
      'description': [''],
      'location':[''],
      'cource': [''],
      'percentage': [''],
      'stipend': [''],
      'skill': [''],
      'vacancies':[''],
      'roundsOfInterview': [''],
      'modeOfInterview': [''],
      'country': [''],
      'state': ['']
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.getInternshipById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.internship;
        this.newInternshipForm.setValue({
          internshipId:this.selectedData.internshipId,
          projectTitle: this.selectedData.projectTitle,
          duration:this.selectedData.duration,
          description:this.selectedData.description,
          location:this.selectedData.location,
          cource:this.selectedData.cource,
          percentage:this.selectedData.percentage,
          stipend:this.selectedData.stipend,
          skill:this.selectedData.skill,
          vacancies:this.selectedData.vacancies,
          roundsOfInterview:this.selectedData.roundsOfInterview,
          modeOfInterview:this.selectedData.modeOfInterview,
          country:this.selectedData.country,
          state:this.selectedData.state,
        });
      })
    }
    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this._iconnectService.getPercentage().subscribe(response => {
      this.percentageList = response.payload.percentage;
    })
    this._iconnectService.getCources().subscribe(response => {
      this.courceList = response.payload.cources;
    })
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = message;
    })
  }

  onSubmit() {
    if (this.paramId) {
      this._iconnectService.updateNewInternship(this.newInternshipForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/hr/internship');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    } else {

       var internship = this.newInternshipForm.value;
       internship.locationId = internship.location.locationId;
       internship.location = internship.location.name;
       internship.stateName =internship.state.name;
       internship.state =internship.state.stateId;
       internship.countryName =internship.country.name;
       internship.country =internship.country.countryId;
       internship.courceId =internship.cource.courseId;
       internship.cource =internship.cource.courseName;


      this._iconnectService.createNewInternship(internship).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Registered");
          this.router.navigateByUrl('/hr/internship');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Registration Unsuccessful");
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
