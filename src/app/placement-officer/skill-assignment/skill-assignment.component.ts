import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IconnectService } from '../../iconnect.service';
import { DataService } from '../../datachange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-assignment',
  templateUrl: './skill-assignment.component.html',
  styleUrls: ['./skill-assignment.component.css']
})
export class SkillAssignmentComponent implements OnInit {
  skills = {};
  displayedColumns: string[] = ['id', 'name', 'email', 'aggregate'];
  dataSource: any = [{id:1, name:"java", email:"java@gmail.com", aggregate:"50%"}];
  constructor() { }

  ngOnInit() {
  }

}
