import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { SnackbarService } from '../../snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  placementForm: FormGroup;
  department: any;
  displayedColumns: string[] = ['number', 'departmentName', 'actions'];
  dataSource: any = [];
  countryList: any;
  schemaType: string[] = ['Anual', 'Semister'];
  stateList: any;
  locationList: any;
  universityList:any;
  selectedData: any;
  courceList : any;
  streamList : any;
  universityObj : any;
  countryObj:any;
  stateObj:any;
  cityObj:any;
  schemeObj:any;
  courceObj:any;
  streamObj:any;

  profile = {'id':'',
              'name':'',
              'mobile':'',
              'email':'',
              'university':'',
              'collegeName':'',
              'state':'',
              'city':'',
              'department':'',
              'cource':'',
              'address1':'',
              'location':'',
              'schemeType':'',
              'course':'',
              'stream':'',
              'collegeAddress':'',
              'collegeContact':'',
              'principalName':'',
              'principalContact':'',
              'principalEmail':'',
              'courseId':'',
              'stateID':'',
              'streamId':'',
              'universityID':'',
              'country':'',
              'countryId':''
              };

  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.placementForm = this._formBuilder.group({
      'name': [''],
      'mobile': [''],
      'email': [''],
      'university': [''],
      'collegeName': [''],
      'country': [''],
      'state': [''],
      'address1': [''],
      'location': [''],
      'schemeType': [''],
      'stream': [''],
      'collegeAddress': [''],
      'collegeContact': [''],
      'principalName': [''],
      'principalContact': [''],
      'principalEmail': [''],
    });
  }

  ngOnInit() {

    this._iconnectService.getCountryDetails().subscribe(response => {
      this.countryList = response.payload.countries;
    })
    this._iconnectService.getStateDetails().subscribe(response => {
      this.stateList = response.payload.states;
    })
    this._iconnectService.getUniversityDetails().subscribe(response => {
      this.universityList = response.payload.universities;
    })

    this._iconnectService.getCources().subscribe(response => {
      this.courceList = response.payload.cources;
    })

    this._iconnectService.getPOProfileDetails().subscribe(response => {
      this.selectedData = response.payload.profile;
      if (this.selectedData) {
       /* this.placementForm.setValue({
          id:this.selectedData.id,
          name: this.selectedData.name,
          mobile: this.selectedData.mobile,
          email: this.selectedData.email,
          university: this.selectedData.universityObj.university,
          collegeName: this.selectedData.collegeName,
          country: this.selectedData.countryObj.country,
          state: this.selectedData.stateObj.state,
          address1: this.selectedData.address1,
          schemeType: this.selectedData.schemeType,
          course: this.selectedData.course,
          stream: this.selectedData.streamObj.stream,
          collegeAddress: this.selectedData.collegeAddress,
          collegeContact: this.selectedData.collegeContact,
          principalName: this.selectedData.principalName,
          principalContact: this.selectedData.principalContact,
          principalEmail: this.selectedData.principalEmail,
          location: this.selectedData.city
        });
        */
          this.profile.id=this.selectedData.id;
          this.profile.name= this.selectedData.name;
          this.profile.mobile= this.selectedData.mobile;
          this.profile.email= this.selectedData.email;
          this.profile.universityID= this.selectedData.universityID;
          this.profile.collegeName= this.selectedData.collegeName;
          this.profile.countryId= this.selectedData.countryId;
          this.profile.stateID= this.selectedData.stateID;
          this.profile.address1= this.selectedData.address1;
          this.profile.schemeType= this.selectedData.schemeType;
          this.profile.courseId= this.selectedData.courseId;
          this.profile.streamId= this.selectedData.streamId;
          this.profile.collegeAddress= this.selectedData.collegeAddress;
          this.profile.collegeContact= this.selectedData.collegeContact;
          this.profile.principalName= this.selectedData.principalName;
          this.profile.principalContact= this.selectedData.principalContact;
          this.profile.principalEmail= this.selectedData.principalEmail;
          this.profile.location= this.selectedData.location;
         // this.universityObj =getUniversityByFilter(this.selectedData.universityID);
         
         this.changState(this.selectedData.stateID);
         this.changCource(this.selectedData.courseId);

      }
    })

    function getUniversityByFilter(id){
      return this.universityList.filter(x => x.universityId === id);
    }

    

  }
  addDept(data) {
    if (data) {
      let dataObj = {
        departName: this.department
      };
      this._iconnectService.addDepartment(dataObj).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          //this.router.navigateByUrl('/po');
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
      // this.dataSource.push(dataObj);
    } else {
      this._snackBar.error("Department name should not be empty");
    }
  }
  deleteData(data) {
    this._iconnectService.deleteData(data).subscribe(response => {
      if (response.resCode == "1") {
        this._snackBar.success("Successfully Updated");
        this.dataSource = response.data;
      } else {
        this._snackBar.error("Error in Updation");
      }
    })
  }

  changState(stateId) {
    this._iconnectService.getLocationDetailsByState(stateId).subscribe(response => {
      this.locationList = response.payload.location;
    })
  }

  changCource(courseId) {
    this._iconnectService.getStreams(courseId).subscribe(response => {
      this.streamList = response.payload.stream;
    })
  }

  onSubmit() {
    if (true) {
      debugger;
   /* let payload = {
      id : this.profile.id,
      countryId :this.countryObj.countryId,
      country:this.countryObj.name,
      courseId:this.courceObj.courseId,
      course : this.courceObj.courseName,
      city:this.cityObj.name,
      location:this.cityObj.locationId,
      stateID:this.stateObj.stateId,
      state:this.stateObj.name,
      streamId:this.streamObj.streamId,
      stream:this.streamObj.name,
      universityID:this.universityObj.universityId,
      university:this.universityObj.name,
      name:this.profile.name,
      mobile:this.profile.mobile,
      email:this.profile.email,
      collegeName:this.profile.collegeName,
      address1:this.profile.address1,
      schemeType:this.profile.schemeType,
      collegeAddress:this.profile.collegeAddress,
      collegeContact:this.profile.collegeContact,
      principalName:this.profile.principalName,
      principalContact:this.profile.principalContact,
      principalEmail:this.profile.principalEmail,
    }*/
      

      this._iconnectService.updatePOProfileDetails(this.profile).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.router.navigateByUrl('/po');
          this.dataService.navData("College");
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    }else{
      this._snackBar.error("Please enter mandatory fields");
    }
  }

}
