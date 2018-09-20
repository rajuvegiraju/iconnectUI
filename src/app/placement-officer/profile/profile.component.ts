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
  placementForm: FormGroup;
  department: any;
  displayedColumns: string[] = ['number', 'departmentName', 'actions'];
  dataSource: any = [];

  constructor(private _formBuilder: FormBuilder, private _snackBar: SnackbarService) {
    this.placementForm = this._formBuilder.group({
      'name': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'university': ['', Validators.required],
      'collegeName': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'area': ['', Validators.required],
      'departmentName': ['', Validators.required],
      'schemeType': ['', Validators.required],
      'course': ['', Validators.required],
      'stream': ['', Validators.required],
      'collegeAddress': ['', Validators.required],
      'collegeContact': ['', Validators.required],
      'principalName': ['', Validators.required],
      'principalContact': ['', Validators.required],
      'principalEmail': ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  addDept(data) {
    if (data) {
      let dataObj = {
        departmentName: data
      };
      
      this.dataSource.push(dataObj);
    } else {
      this._snackBar.error("Department name should not be empty");
    }
  }

}
