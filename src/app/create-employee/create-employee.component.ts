import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee  = new Employee();
   
  constructor(private employeeservice:EmployeeService, private route:Router){

  } 
  ngOnInit(){
    
  }
  onSubmit():any{
    console.log(this.employee);
    this.forcreate();
  }
  
 forcreate():any{
     this.employeeservice.createlist(this.employee).subscribe(data =>{
      console.log(data);
      this.fornavigation();
     },
     (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  fornavigation(){
    this.route.navigate(['/employeelistrouting'])
    /*.then((e) => {
      if (e) {
        alert("Navigation is successful!");
      } else {
        alert("Navigation has failed!");
      }
    });*/
  }

 /* these below line code for other two findby id and findbyall apis. you can see in the service class.
  onSubmit1():any{
      this.forfindid();
      //this.findbyall1();
  }
  
  forfindid():any{
    this.employeeservice.findbyids(this.employee).subscribe(data=>{
      //console.log(data);
      this.fornavigation();
      
    },
    (error:HttpErrorResponse)=>
    {
      alert(error.message);
    }
    )
  }
  findbyall1(){
    this.employeeservice.findbyall().subscribe(data=>{
      console.log(data);
      
    })
  }*/
  }
  




