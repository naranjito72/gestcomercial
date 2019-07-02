import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { CustomurModule } from './customur/customur.module';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomurModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
