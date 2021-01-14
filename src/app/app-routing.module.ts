import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { RegComponent } from './reg/reg.component';
import { RegionssComponent } from './regionss/regionss.component';

const routes: Routes = [
  {​​​​​ path:'',component:HomeComponent}​​​​​,
  {​​​​​ path:'home',component:HomeComponent}​​​​​,
  {​​​​​ path:'regions',component:RegComponent}​​​​​,
  {​​​​​ path:'countries',component:PaysComponent}​​​​​,
  {​​​​​ path:'countries/:region',component:RegionssComponent}​​​​​,
  {​​​​​ path:'country/:pay',component:DetailsComponent}​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
