import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number= 0;
  employee :Employee = new Employee();
  constructor(private activatedRoute: ActivatedRoute ,private employeeService:EmployeeService , private router:Router) { 
    this.activatedRoute.params.subscribe(data =>{
      this.id = data.id ;
    })
  }

  ngOnInit(): void {
    this.getEmployee(this.id);

  }

getEmployee(id:number){
  this.employeeService.getEmployeeById(id).subscribe(data =>{
    this.employee = data ;
    
  })
}
  
  updateForm(updateEmployeeForm :NgForm){

    this.employee.firstName = updateEmployeeForm.value.firstName ;
    this.employee.lastName = updateEmployeeForm.value.lastName ;
    this.employee.emailId = updateEmployeeForm.value.emailId ;
   
    this.employeeService.saveEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(["employee"]) ;
    })
  }

}
