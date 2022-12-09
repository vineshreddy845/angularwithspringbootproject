import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] ;// it array of type Employee class;
 /* ngOnInit():void{
    this.employees=[{
      "id":1,
      "firstname":"vinesh",
      "lastname":"reddys",
      "Email":"id"
    }
  ];
  }*/

 /* trye():any{
    this.getEmployees();
  }*/
  


  constructor(private employeeservice:EmployeeService){
    
  }
  private getEmployees()
  {
    this.employeeservice.getEmployeelist().subscribe(data => {
      this.employees=data;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }
  ngOnInit(){
    this.getEmployees();
  }

  

}
