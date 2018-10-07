import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-corporate',
  templateUrl: './invite-corporate.component.html',
  styleUrls: ['./invite-corporate.component.css']
})
export class InviteCorporateComponent implements OnInit {
  companyName:any;
  companyNames:any = [{
    name:'Mahindra', value:'mahi'
  }]
  constructor() { }

  ngOnInit() {
  }

}
