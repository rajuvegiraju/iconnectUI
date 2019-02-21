import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentForm: FormGroup;
  countryList: any;
  stateList: any;
  dashMessage: String;
  selectedData: any;
  paramId: any;
  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
    this.addStudentForm = this._formBuilder.group({
      'id': [''],
      'registerNo': ['', Validators.required],
      'name': ['', Validators.required],
      'dob': ['', Validators.required],
      'gender': ['', Validators.required],
      'mobile': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'email': ['', [Validators.required, Validators.email]],
      'course': ['', Validators.required],
      'stream': ['', Validators.required],
      'yearOfPass': ['', Validators.required]
    });
    this.route.params.subscribe(params => this.paramId = params.id);
  }

  ngOnInit() {
     if (this.paramId) {
     debugger;
       this._iconnectService.getPendingApprovalForStudentRegById(this.paramId).subscribe(response => {
         this.selectedData = response.payload.student;
         this.addStudentForm.setValue({
           id:this.selectedData.id,
           name: this.selectedData.name,
           mobile:this.selectedData.mobile,
           email:this.selectedData.email ,
           registerNo:null,
           dob:null,
           gender:null,
           course:null,
           stream:null,
           yearOfPass:null
         });
       })
     }
    this.dataService.navMessage.subscribe(message => {
      this.dashMessage = message;
    })
  }

  onSubmit() {
   
      this._iconnectService.addNewStudent(this.addStudentForm.value).subscribe(response => {
        if (response.resCode == "1") {
          this._snackBar.success("Successfully Uploaded..");
          this.router.navigateByUrl('/po/studentList');
          this.dataService.navData("College");
        } else {
          this._snackBar.error(response.mesgStr);
        }
      })
    
  }


}
