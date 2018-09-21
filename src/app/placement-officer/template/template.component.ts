import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  navMessage:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.navMessage = "Dashboard";
   /* this.router.navigate(['hr']); */
  }
  navBar(data){
    this.navMessage = data;
  }

}
