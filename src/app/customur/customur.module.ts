import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomurRoutingModule } from './customur-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';

@NgModule({
  declarations: [CustomerlistComponent, CustomerdataComponent],
  imports: [
    CommonModule,
    CustomurRoutingModule
  ],
  exports: [CustomerlistComponent]
})
export class CustomurModule { }
