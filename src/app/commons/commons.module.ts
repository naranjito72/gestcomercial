import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent,  HomeComponent, FooterComponent, NotfoundComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,

  ],
  exports: [HeaderComponent, NavbarComponent,  HomeComponent, FooterComponent, NotfoundComponent]
})
export class CommonsModule { }
