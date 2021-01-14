import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
name;
b;
  constructor(private route: ActivatedRoute,
    private httpService: HttpService,) { }

    ngOnInit(): void {this.route.params.subscribe(event => {
      this.name=event.pay;
     });
     this.b=this.httpService.getdetails(this.name);
     console.log(this.b);

    }
}
