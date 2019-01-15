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
  // studentForm: FormGroup;
  studentForm = {};
  displayedColumns: string[] = ['prevcourse', 'prevcollege', 'prevuniversity', 'prevcity','prevyearOfPass','actions'];
  dataSource: any = [];
  modeOfInterviewList:any = [];
  courceList:any = [];
  keySkills: string[] = ['Java', 'Angular js', 'Javascript', 'Html5', 'Css3', 'Reactjs'];
  prevEducationDetails:any = {}
  selectedData: any;

  constructor(private _formBuilder:FormBuilder, private _snackBar:SnackbarService, private router: Router, private _iconnectService: IconnectService, private dataService: DataService) {
    // this.studentForm = this._formBuilder.group({
    //   'name': [''],
    //   'aboutME': [''],
    //   'mobile': [''],
    //   'keySkill': [''],
    //   'course': [''],
    //   'stream': [''],
    //   'college': [''],
    //   'university': [''],
    //   'city': [''],
    //   'yearOfPass': [''],
    //   'prevcourse': [''],
    //   'prevcollege': [''],
    //   'prevuniversity': [''],
    //   'prevcity': [''],
    //   'prevyearOfPass': [''],
    //   'dob': [''],
    //   'email': [''],
    //   'languages': [''],
    //   'emailId': ['']
      
    //   });
  }

  ngOnInit() {

    this._iconnectService.getCources().subscribe(response => {
      console.log(response);
      this.courceList = response;
    })
  
    this._iconnectService.getStudentsProfile().subscribe(response => {
        this.selectedData = response.payload.profile;

        // this.studentForm.setValue({
        //   id:this.selectedData.id,
        //   name: this.selectedData.name,
        //   aboutME: this.selectedData.aboutME,
        //   mobile:this.selectedData.mobile,
        //   keySkill:this.selectedData.keySkills,
        //   course:this.selectedData.courseId,
        //   stream:this.selectedData.streamId,
        //   college:  this.selectedData.college,
        //   university: this.selectedData.university,
        //   city: this.selectedData.city,
        //   yearOfPass: this.selectedData.yearOfPass,
        //   dob: this.selectedData.dob,
        //   email: this.selectedData.email,
        //   languages: this.selectedData.languages
        
        // });
    });
  }

  onSubmit(){
  
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
    updateProfile(){
      this._iconnectService.updateStudent(this.studentForm).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Updated");
          this.dataSource = response.data;
        } else {
          this._snackBar.error("Error in Updation");
        }
      })
    }
    prevEduDetails(data) {
      if (data) {
        // this._iconnectService.addDepartment(data).subscribe(response => {
        //   if (response.resCode == "1") {
        //     this._snackBar.success("Successfully Updated");
        //     //this.router.navigateByUrl('/po');
        //   } else {
        //     this._snackBar.error("Error in Updation");
        //   }
        // })
        this.dataSource.push(data);
      } else {
        this._snackBar.error("Department name should not be empty");
      }
    }

}
