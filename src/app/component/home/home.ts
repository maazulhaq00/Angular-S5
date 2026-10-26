import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  // styleUrl: './home.css',
  // templateUrl: './home.html',
  styles: [ '.page-title {color: rgb(21, 13, 56);}' ],
  template: '<div class="container mt-4"><h3 class="page-title">Home</h3><p>This is home page component</p></div>'
})
export class Home {}
