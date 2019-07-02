import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(miParams => { this.identifier = miParams [ 'id' ]; });
    
/*OBSERVABLE, REUTILIZA LA MEMORIA CADA VEZ*/
/* this.identifier = this.route.params['id'];*/
  }

}
