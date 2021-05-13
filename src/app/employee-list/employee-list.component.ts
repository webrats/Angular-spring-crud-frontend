import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees :Employee[] ;
  constructor(private employeeService :EmployeeService , private router :Router) { }

 
  ngOnInit(): void {

  this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  update(id:number){
    this.router.navigate(['update-employee',id])
  }

  delete(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      console.log(data)
      this.getEmployee();
    })
  }

}
