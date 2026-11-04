import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  student_id : number,
  student_name : string,
  student_city : string,
  isActive : boolean,
  percent: number
}

@Component({
  imports: [CommonModule],
  selector: 'app-students-table',
  styleUrl: './students-table.css',
  templateUrl: './students-table.html',
})
export class StudentsTable {

  studentsList : Student[] = [
    { student_id: 1, student_name: "Muhammad Khan", student_city: "Gujranwala", isActive: true, percent: 39  },
    { student_id: 2, student_name: "Ammad Shah", student_city: "Karachi", isActive: true, percent: 30 },
    { student_id: 3, student_name: "Hassan", student_city: "Sukkar", isActive: false, percent: 100 },
    { student_id: 4, student_name: "Ambreen", student_city: "Abbottabad", isActive: true, percent: 57 }
  ];



}
