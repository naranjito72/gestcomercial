import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import customers from '../../shared/data/data';

@Component({
  selector: 'gc-customerdata',
  template: `
    <p>
      customerdata works!
    </p>
  `,
  styleUrls: ['./customerdata.component.scss']
})
export class CustomerdataComponent implements OnInit {

public identifier: any;
public customres: Array<Object>;


  constructor(private route: ActivatedRoute) { }
  this.selectedCustomer = customers.filter(e => {e.index === this.identifier; return e});

  ngOnInit() {
    this.route.params.subscribe(miParams => { this.identifier = miParams [ 'id' ]; });

/*OBSERVABLE, REUTILIZA LA MEMORIA CADA VEZ*/
/* this.identifier = this.route.params['id'];*/
  }

}
