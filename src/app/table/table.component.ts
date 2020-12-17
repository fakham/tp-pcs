import { Component, Input, OnInit } from '@angular/core';
import { Computer } from '../computer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headers:Array<string>;
  @Input() computers:Array<Computer>;

  constructor() { }

  ngOnInit(): void {
  }

}
