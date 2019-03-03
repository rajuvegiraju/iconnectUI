import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { SnackbarService } from '../../snackbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentForm: FormGroup;
  displayedColumns: string[] = ['prevcourse', 'prevcollege', 'prevuniversity', 'prevcity','prevyearOfPass','actions'];
  dataSource: any = [];
  modeOfInterviewList:any = [];
  courceList:any;
  countryList:any;
  locationList:any;
  universityList:any;
  streamList:any;
  stateList:any;
  keySkills: string[] = ['Java', 'Angular js', 'Javascript', 'Html5', 'Css3', 'Reactjs'];
  languages:string[] = ['English','Hindi','Kanada'];
  prevEducationDetails:any = {}
  selectedData: any;

   profile = {'name':'',
              'aboutME':'',
              'mobile':'',
              'keySkill':'',
              'cource':'',
              'stream':'',
              'college':'',
              'university':'',
              'country':'',
              'state':'',
              'city':'',
              'address1':'',
              'yearOfPass':'',
              'prevcourse':'',
              'prevcollege':'',
              'prevuniversity':'',
              'prevcity':'',
              'prevyearOfPass':'',
              'dob':'',
              'languages':'',
              'emailId':''
              };
  

  constructor(private _formBuilder:FormBuilder, private _snackBar:SnackbarService, private router: Router, private _iconnectService: IconnectService, private dataService: DataService) {
    this.studentForm = this._formBuilder.group({
      'studentId':[''],
      'name': ['',Validators.required],
      'aboutME': [''],
      'mobile': [''],
      'keySkillsList': [''],
      'courseId': [''],
      'course': [''],
      'stream': [''],
      'streamId': [''],
      'percentage':[''],
      'collegeName': [''],
      'universityId': [''],
      'universityName': [''],
      'country':[''],
      'countryName':[''],
      'state':[''],
      'stateName':[''],
      'cityId': [''],
      'cityName': [''],
      'address1': [''],
      'yearOfPass': [''],
      'prevcourse': [''],
      'prevcollege': [''],
      'prevuniversity': [''],
      'prevcity': [''],
      'prevyearOfPass': [''],
      'dob': [''],
      'languagesList': [''],
      'email': ['']
    });
  }

  ngOnInit() {

    this._iconnectService.getCources().subscribe(response => {
      console.log(response);
      this.courceList = response.payload.cources;
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

    this._iconnectService.getStudentsProfile().subscribe(response => {
        this.selectedData = response.payload.profile;

        this.studentForm.setValue({
          studentId:this.selectedData.studentId,
          name: this.selectedData.name,
          aboutME: this.selectedData.aboutME,
          mobile:this.selectedData.mobile,
          email: this.selectedData.email,
          keySkillsList:this.selectedData.keySkillsList,
          courseId:this.selectedData.courseId,
          course:this.selectedData.course,
          stream:this.selectedData.stream,
          streamId:this.selectedData.streamId,
          percentage:this.selectedData.percentage,
          collegeName:this.selectedData.collegeName,
          universityId:this.selectedData.universityId,
          universityName:this.selectedData.universityName,
          country:this.selectedData.country,
          countryName:this.selectedData.countryName,
          state:this.selectedData.state,
          stateName:this.selectedData.stateName,
          cityId: this.selectedData.cityId,
          cityName: this.selectedData.cityName,
          address1:this.selectedData.address1,
          yearOfPass: new Date(this.selectedData.yearOfPass),
          dob: new Date(this.selectedData.dob),
          languagesList:this.selectedData.languagesList,
          prevcourse: '',
          prevcollege: '',
          prevuniversity: '',
          prevcity: '',
          prevyearOfPass: '',
        
        });

        this.changState(this.selectedData.state);
        this.changCource(this.selectedData.courseId);
    });

  }
  changState(stateId) {
      this._iconnectService.getLocationDetailsByState(stateId).subscribe(response => {
        this.locationList = response.payload.location;
      })
    }
  changCource(courseId) {
    this._iconnectService.getStreams(courseId).subscribe(response => {
     // this.studentForm.course = cource.courseName;
      this.streamList = response.payload.stream;
    })
  }
  setStreamName(stream) {
    
    //this.studentForm.stream = stream.name;
      
  }
    addEducation(data) {
      if (data) {
        //let dataObj = this.prevEducationDetails
        // this._iconnectService.addRow(dataObj).subscribe(response => {
        //   if (response.resCode == "1") {
        //     this._snackBar.success("Successfully Updated");
        //     //this.router.navigateByUrl('/po');
        //   } else {
        //     this._snackBar.error("Error in Updation");
        //   }
        // })      
        this.dataSource.push(this.prevEducationDetails);
        this.prevEducationDetails = {};
      } else {
        this._snackBar.error("Department name should not be empty");
      }
    }

    deleteEducation(row) {
      this.dataSource.data.splice(row.position - 1, 1);

      // this._iconnectService.deleteData(data).subscribe(response => {
      //   if (response.resCode == "1") {
      //     this._snackBar.success("Successfully Updated");
      //     this.dataSource = response.data;
      //   } else {
      //     this._snackBar.error("Error in Updation");
      //   }
      // })
    }
    onSubmit(){
    debugger;
      this._iconnectService.updateStudent(this.studentForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.dataSource = response.data;
          this.router.navigateByUrl('/student');
          
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    }

}
