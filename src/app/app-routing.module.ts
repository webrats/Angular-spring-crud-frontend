import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path: 'employee',component:EmployeeListComponent},
  {path: 'update-employee/:id',component:UpdateEmployeeComponent},
  {path: 'create-employee',component:CreateEmployeeComponent},
  {path: '',redirectTo:"employee",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
