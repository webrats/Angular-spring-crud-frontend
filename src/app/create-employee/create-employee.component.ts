import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee :Employee = new Employee();
  constructor(private employeeService:EmployeeService , private router :Router) { }

  ngOnInit(): void {
  }


  createForm(createEmployeeForm :NgForm){
    this.employee.firstName = createEmployeeForm.value.firstName;
    this.employee.lastName = createEmployeeForm.value.lastName;
    this.employee.emailId = createEmployeeForm.value.emailId;
    console.log(this.employee)
    this.saveEmployee_();
  }

  saveEmployee_(){
    this.employeeService.saveEmployee(this.employee).subscribe(data => {
      console.log(" "+data);
      this.router.navigate(['/employee'])
    })
  }





 
}
