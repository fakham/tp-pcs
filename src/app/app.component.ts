import { Component } from '@angular/core';
import { Computer } from './computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCs';
  headers = ['Name', 'Brand', 'Price'];
  data:Array<Computer>;

  constructor() {
    this.data = new Array<Computer>();
  }

  addComputer(computer:Computer) {
    this.data.push(computer);
  }
}
