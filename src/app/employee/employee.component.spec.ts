import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

labelName='Enter Username';
labelName2='Enter Password ';
UserName:string='';
Password:string='';

ngOnInit(): void {
}
  getUserName = (event: any) => {
    console.log(event.target.value);
    this.UserName = event.target.value;  
  }
  


  getPassword=(event:any)=>{
    console.log(event.target.value);
   this.Password=event.target.value;  
     }
     
     onBlur(fc:any){
      console.log(fc);
    }

}