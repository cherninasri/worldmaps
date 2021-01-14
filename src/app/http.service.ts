import {​​​​​​​ HttpClient }​​​​​​​ from '@angular/common/http';
import {​​​​​​​ Injectable }​​​​​​​ from '@angular/core';
@Injectable({​​​​​​​
  providedIn: 'root'
}​​​​​​​)
export class HttpService {​​​​​​​
  constructor( private http: HttpClient) {​​​​​​​ }​​​​​​​
  getCountries (region){​​​​​​​
    let p=[]
    this.http.get<any[]>('https://restcountries.eu/rest/v2/region/'+region).subscribe(
      (pays)=>{​​​​​​​
        pays.forEach(
         pay => {​​​​​​​
           p.push(pay)
         }​​​​​​​
        )
        // console.log(p)
      }​​​​​​​
    )
    return p;
  }​​​​​​​
  getdetails(name){​​​​​​​
    let p=[]
    this.http.get<any[]>('https://restcountries.eu/rest/v2/name/'+name).subscribe(
      (pays)=>{​​​​​​​
        pays.forEach(
         pay => {​​​​​​​
           p.push(pay)
         }​​​​​​​
        )
        // console.log(p)
      }​​​​​​​
    )
    return p;
  }​​​​​​​
  getallCountries (){​​​​​​​
    let p=[]
    this.http.get<any[]>('https://restcountries.eu/rest/v2/all').subscribe(
      (pays)=>{​​​​​​​
        pays.forEach(
         pay => {​​​​​​​
           p.push(pay)
         }​​​​​​​
        )
        // console.log(p)
      }​​​​​​​
    )
    return p;
  }​​​​​​​
}​​​​​​​
