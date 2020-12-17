import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Computer } from '../computer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string;
  brand:string;
  price:number;

  @Output() onFormSubmit: EventEmitter<Computer> = new EventEmitter<Computer>();

  public submitForm(): void {
    let computer = new Computer(this.name, this.brand, this.price);
    this.onFormSubmit.emit(computer);
    this.name = "";
    this.brand = "";
    this.price = null;
  }

}
