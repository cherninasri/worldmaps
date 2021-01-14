import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  countries;

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {

     this.countries = this.HttpService.getallCountries();
    // console.log(this.countries);

  }

}
