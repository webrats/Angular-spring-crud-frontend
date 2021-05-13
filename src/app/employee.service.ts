import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  urlPath=environment.baseUrl;

  constructor(private httpClient: HttpClient) {  }
  
  getEmployeeList() :Observable<Employee[]>{
    
    return  this.httpClient.get<Employee[]>(`${this.urlPath}`) ;
  }

  saveEmployee(employee: Employee) :Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.urlPath}`,employee, { responseType: 'text' as 'json' });
  }
  
  getEmployeeById(id: number): Observable<Employee>{
    return  this.httpClient.get<Employee>(`${this.urlPath}`+'/'+id) ;
  }

  deleteEmployeeById(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.urlPath}`+'/'+id , { responseType: 'text' as 'json' });
  }
}


