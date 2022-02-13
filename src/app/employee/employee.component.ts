import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  labelName='Employee Name :';
  labelName2='password :';
  UserName:string='';

  ngOnInit(): void {
  }
  getUserName = (event: any) => {
    console.log(event.target.value);
    this.UserName = event.target.value;
  }
}
