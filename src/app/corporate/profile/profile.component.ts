import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hrForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.hrForm = this._formBuilder.group({
      'corporateName': ['', Validators.required],
      'industry': ['', Validators.required],
      'corporateWebsite': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'location': ['', Validators.required],
      'addessOne':  ['', Validators.required],
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'mobile': ['', Validators.required],
      'designation': ['', Validators.required],
      'officeNumber': ['', Validators.required],
      'extension': ['', Validators.required],
      'persionalEmail': ['', Validators.required],
      'secoundPCPName': ['', Validators.required],
      'secoundPCPEmail': ['', Validators.required],
      'secoundPCPMobile': ['', Validators.required],
      'secoundPCPDesignation': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
