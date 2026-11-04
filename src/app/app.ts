import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee'
import { EmployeeList } from './component/employee-list/employee-list'
import { Home } from './component/home/home'
import { DataBinding } from './component/data-binding/data-binding'
import { StructuralDirectives } from './component/structural-directives/structural-directives'
import { StudentsTable } from './component/students-table/students-table'
import { AttributeDirectives } from './component/attribute-directives/attribute-directives'

@Component({
  imports: [RouterOutlet, StructuralDirectives, AddEmployee, EmployeeList, Home, DataBinding, StudentsTable, AttributeDirectives],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
