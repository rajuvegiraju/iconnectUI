import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-skill-program',
  templateUrl: './view-skill-program.component.html',
  styleUrls: ['./view-skill-program.component.css']
})
export class ViewSkillProgramComponent implements OnInit {
  displayedColumns: string[] = ['industry', 'skillDevProgram', 'lesson', 'noOfStds'];
  dataSource: any = [{industry:"software", skillDevProgram:"Today", lesson:"java", noOfStds:"50"}];

  constructor() { }

  ngOnInit() {
  }

}
