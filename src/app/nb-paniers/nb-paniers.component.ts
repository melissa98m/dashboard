import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-paniers',
  templateUrl: './nb-paniers.component.html',
  styleUrls: ['./nb-paniers.component.css']
})
export class NbPaniersComponent implements OnInit {

  totaLAngularPackage : any;
  constructor(private http: HttpClient) { }
  
  apiUrl = "http://127.0.0.1:8000/api/orders" ;
  
  nbPanier:any


  ngOnInit(): void {

    this.http.get<any>('http://127.0.0.1:8000/api/order_details').subscribe(data =>{

      this.totaLAngularPackage = data.total;
      console.log(data);
       this.nbPanier = data['hydra:member'].lenght;
       this.nbPanier = data["hydra:totalItems"]; //recupere le nombre totale de panier 
  
  
      })
      
  }

}
