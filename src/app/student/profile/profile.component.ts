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
  constructor(private _formBuilder:FormBuilder) {
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
      'languages': ['', Validators.required]
      
      });
  }

  ngOnInit() {
  }

}
