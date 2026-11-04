import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-structural-directives',
  styleUrl: './structural-directives.css',
  templateUrl: './structural-directives.html',
})
export class StructuralDirectives {
  isDiv1Visible : boolean = true;
  num1 : number = 77
  num2 : number = 33
  cities : string[] = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Multan"]
  
  currentSemester: string = "CPISM";
  semesterArray: string[] = ["CPISM", "DISM", "HDSE-I", "HDSE-II", "ADSE-I", "ADSE-II"]



  

  hideDiv1() : void {
    this.isDiv1Visible = false
  }
  showDiv1() : void {
    this.isDiv1Visible = true
  }

  


}
