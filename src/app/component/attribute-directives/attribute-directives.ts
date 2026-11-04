import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-attribute-directives',
  styleUrl: './attribute-directives.css',
  templateUrl: './attribute-directives.html',
})
export class AttributeDirectives {

  div1BgColor: string = "bg-primary"
  num1: number = 0
  num2: number = 0


  makeBlue() : void {
    this.div1BgColor = "bg-primary"
  }
  makeRed() : void {
    this.div1BgColor = "bg-danger"
  }

  toggleColor() : void {

    if(this.div1BgColor == "bg-primary"){
      this.div1BgColor = "bg-danger"
    }
    else {
      this.div1BgColor = "bg-primary"
    }
  }

}
