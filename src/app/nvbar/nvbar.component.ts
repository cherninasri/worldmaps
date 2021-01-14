import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
p='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
recherche(){
  this.router.navigate(['countries/region',this.p])
}
}
