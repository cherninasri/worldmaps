import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { RegComponent } from './reg/reg.component';
import { PaysComponent } from './pays/pays.component';
import {​​​​​ HttpClientModule }​​​​​ from'@angular/common/http';
import { RegionssComponent } from './regionss/regionss.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NvbarComponent,
    RegComponent,
    PaysComponent,
    RegionssComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
