import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"employeelistrouting",component: EmployeeListComponent},// these javascript object and employeelistcomponent loded when we call "http://localhost:4200/employeelistrouting".
  //that we setting route. important we have to mention <route-outline></route-outline> directive in place of  'app-employee-list'.in app-component. 
  {path:"createemployee", component:CreateEmployeeComponent},
  {path:"updateemployee",component:UpdateComponent},
  {path:"deleteemployee",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
