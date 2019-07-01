import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FromsuppliersComponent } from './fromsuppliers/fromsuppliers.component';
import { TocustomresComponent } from './tocustomres/tocustomres.component';

@NgModule({
  declarations: [FromsuppliersComponent, TocustomresComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [FromsuppliersComponent, TocustomresComponent]
})
export class BillingModule { }
