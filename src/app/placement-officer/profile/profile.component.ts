import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  placementForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
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

}
