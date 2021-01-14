import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-regionss',
  templateUrl: './regionss.component.html',
  styleUrls: ['./regionss.component.css']
})
export class RegionssComponent implements OnInit {
region;
pays
  constructor(private route: ActivatedRoute,
    private httpService: HttpService,) { }

  ngOnInit(): void {this.route.params.subscribe(event => {
    this.region=event.region;
   });
   this.pays=this.httpService.getCountries(this.region);
   console.log(this.pays);

  }

}
