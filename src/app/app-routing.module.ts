import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customur/customerlist/customerlist.component';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { CustomerdataComponent } from './customur/customerdata/customerdata.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerlistComponent},
  {path: 'customer_detail/:id', component: CustomerdataComponent},
  {path: 'customers', component: CustomerdataComponent},
  {path: '**', component: NotfoundComponent},
  {path: 'storing',

   loadChildren: () => import ('./storing/storing.module').then(mod => mod.StoringModule)}
/*standby y difiero*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
