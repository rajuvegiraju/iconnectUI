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
  courceList:any = [];
  keySkills: string[] = ['Java', 'Angular js', 'Javascript', 'Html5', 'Css3', 'Reactjs'];
  prevEducationDetails:any = {}

  constructor(private _formBuilder:FormBuilder, private _snackBar:SnackbarService, private router: Router, private _iconnectService: IconnectService, private dataService: DataService) {
    this.studentForm = this._formBuilder.group({
      'name': ['', Validators.required],
      'about': ['', Validators.required],
      'mobile': ['', Validators.required],
      'keySkill': ['', Validators.required],
      'course': ['', Validators.required],
      'stream': ['', Validators.required],
      'college': ['', Validators.required],
      'university': ['', Validators.required],
      'city': ['', Validators.required],
      'yearOfPass': ['', Validators.required],
      'area': ['', Validators.required],
      'prevcourse': ['', Validators.required],
      'prevcollege': ['', Validators.required],
      'prevuniversity': ['', Validators.required],
      'prevcity': ['', Validators.required],
      'prevyearOfPass': ['', Validators.required],
      'dob': ['', Validators.required],
      'email': ['', Validators.required],
      'languages': ['', Validators.required],
      'emailId': ['', Validators.required]
      
      });
  }

  ngOnInit() {
  }

  onSubmit(){
  
  }
  addDept(data) {
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
  deleteData(row) {
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
}
