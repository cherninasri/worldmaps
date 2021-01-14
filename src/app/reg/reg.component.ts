import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }
  goRegion(region){
    this.router.navigate(['countries',region]);


  }

}
