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
  courceList:any = ["B.Tech", "B.SC"];
  stateList: any;
  modeOfInterviewList: any =["Telephone", "F2F"];
  locationList: any =["Bengalore", "Hyd"];
  dashMessage: String;
  selectedData: any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.newInternshipForm = this._formBuilder.group({
      'internshipId': [''],
      'projectTitle': ['', Validators.required],
      'duration': ['', Validators.required],
      'description': ['', Validators.required],
      'location':['', Validators.required],
      'cource': ['', Validators.required],
      'percentage': ['', Validators.required],
      'stipend': ['', Validators.required],
      'skill': ['', Validators.required],
      'vacancies':['', Validators.required],
      'roundsOfInterview': ['', Validators.required],
      'modeOfInterview': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
    if (this.paramId) {
      this._iconnectService.collegeListById(this.paramId).subscribe(response => {
        this.selectedData = response.payload.college;
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
          modeOfInterview:this.selectedData.modeOfInterview
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
      this._iconnectService.createNewInternship(this.newInternshipForm.value).subscribe(response => {
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

}
