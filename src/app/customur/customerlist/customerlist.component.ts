import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/shared/interfaces/customer.interface';

@Component({
  selector: 'gc-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  customers: Array<Object>;


  constructor() { }

  ngOnInit() {

  }

}
