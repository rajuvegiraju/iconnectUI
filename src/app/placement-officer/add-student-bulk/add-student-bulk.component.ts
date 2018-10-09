import { Component, OnInit } from '@angular/core';
/*import {  FileUploader } from 'ng2-file-upload'; */
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';



@Component({
  selector: 'app-add-student-bulk',
  templateUrl: './add-student-bulk.component.html',
  styleUrls: ['./add-student-bulk.component.css']
})
export class AddStudentBulkComponent implements OnInit {

  URL:string = 'http://localhost:8080/iconnect/api/upload';
  title:string = 'app';

  uploader: FileUploader = new FileUploader({url: 'http://localhost:8080/iconnect/api/upload', itemAlias: 'photo'});

  constructor(private _snackBar: SnackbarService, private router: Router, private route: ActivatedRoute, private _formBuilder: FormBuilder, private _iconnectService: IconnectService, private dataService: DataService) {
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

}
