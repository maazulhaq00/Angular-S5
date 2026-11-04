import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  courseName : string = "Angular"
  imgUrl : string = "https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
  inputType : string = "radio"

  sayHello(name : string) : void {
    alert("Hello " + name)
  }
  changeCourse(course : string) : void {
    this.courseName = course
  }
}
