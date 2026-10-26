import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee'
import { EmployeeList } from './component/employee-list/employee-list'
import { Home } from './component/home/home'

@Component({
  imports: [RouterOutlet, AddEmployee, EmployeeList, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
