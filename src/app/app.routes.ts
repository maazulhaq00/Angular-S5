import { Routes } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee';
import { EmployeeList } from './component/employee-list/employee-list';
import { Home } from './component/home/home';
import { DataBinding } from './component/data-binding/data-binding';
import { StructuralDirectives } from './component/structural-directives/structural-directives';
import { AttributeDirectives } from './component/attribute-directives/attribute-directives';
import { StudentsTable } from './component/students-table/students-table';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "add-emp",
        component: AddEmployee
    },
    {
        path: "emp",
        component: EmployeeList
    },
    {
        path: "datab",
        component: DataBinding
    },
    {
        path: "struct-dir",
        component: StructuralDirectives
    },
    {
        path: "attr-dir",
        component: AttributeDirectives
    },
    {
        path: "student-table",
        component: StudentsTable
    }
];
