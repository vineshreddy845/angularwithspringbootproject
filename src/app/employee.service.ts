import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Employee } from './employee';

@Injectable({ //decorator
  providedIn: 'root'
})
export class EmployeeService {

  /*private baseurl="http://localhost:8080/api/GetDetails";
  constructor(private httpclient:HttpClient) {

  }
  getEmployeelist():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseurl}`);
  }*/
  private baseurl:string;
 // private findbyidurl:string ="http://localhost:8080/api/findbyids"; here we used these url for locally works.we now angular uploded in to AWS. so that we are using server url="angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com" replace in place of localhost:8080.in all places.
  private findbyidurl:string ="http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/findbyids";
  private updateurl:string="http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/employee";
  private deleteurl:string="http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/deletebyid";
    
  constructor(private http:HttpClient)// httpclient used for http request like get,post ,put etc.// syntax like privarte variable name:type. it is same like dependency.like in springboot private http https;@Aytowired. we can also inject depedency using constructor.
  {
    this.baseurl="http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/employee";
    
  }
// these are client request.
  getEmployeelist():Observable<Employee[]>{//observables provide support for passing messages between parts of your application.
    return this.http.get<Employee[]>(this.baseurl); // these is http.getmethod(url).
  }//above code like these postman works. post method. base url.
        //object:type--same as springboot api see in springboot
  createlist(employee:Employee):Observable<any>{//Observables provide support for data sharing between publishers and subscribers in an angular application.
    return this.http.post(this.baseurl,employee); //employee object.
  }//above code like these postman works. post method. base url. requestbody.we have employee object data. and we get response.
  
  
  
  findbyid( employee:Employee):Observable<Employee[]>{
    return this.http.get<Employee[]>("http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/findbyid");
  }

  findbyids(employee:Employee):Observable<Employee>{
    return this.http.get<Employee>(`${this.findbyidurl}/${employee.id}`);
  }
  findbyall():Observable<Employee>{
    return this.http.get<Employee>("http://angularwithspringboot-env.eba-9ihsw3vp.us-east-2.elasticbeanstalk.com/api/findall");
  }
  updates(employee:Employee,id:number):Observable<Employee>{
    return this.http.put<Employee>(`${this.updateurl}/${id}`,employee);
    
  }
  delete(idnumber:number):Observable<any>{
    return this.http.delete<any>(`${this.deleteurl}/${idnumber}`)
  }
}
//what is service class in angular?
/* A: command we use to generate service class " ng g s classname".
Services in Angular are simply typescript classes with the @injectible decorator. This decorator tells angular that the class is a service and can be injected into components that need that service. They can also inject other services as dependencies. 
As mentioned earlier, these services are used to share a single piece of code across multiple components. These services are used to hold business logic. 
Services are used to interact with the backend. For example, if you wish to make AJAX calls, you can have the methods to those calls in the service and use it as a dependency in files.
1:A service is a class.
2:Decorated with @Injectable
3:They share the same piece of code.
4:Hold the bussiness logic.
5:interact with the backend.
6:shared data among components.
7:services are singleton.
*/
