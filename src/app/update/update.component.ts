import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  employee:Employee = new Employee();
  id:number;

  constructor(private employeeserivce:EmployeeService , private route:Router){

  }

  ngOnInit(){
    
  }

  updated():any{
    this.employeeserivce.updates(this.employee,this.id).subscribe(data=>{
      console.log(data);
      this.navgitation();
    })
  }
  navgitation():any{
    this.route.navigate(['/employeelistrouting']);
  }
  onSubmit()
{
  this.updated();
}

}
