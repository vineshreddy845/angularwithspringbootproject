import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  idnumber:number;
  ngOnInit(){
    
  }
  constructor(private employeeservice:EmployeeService, private route:Router){

  }

  deletebyidss():any{
     this.employeeservice.delete(this.idnumber).subscribe(data=>{
      this.navigate();
     })
  }
  navigate():any{
  this.route.navigate(['/employeelistrouting']);
  }
}

// we write ng build in terminal.it will create on floder dist. you can see above. we upload on files in dist folder in s3 bucket.
