import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-panier-abondonne',
  templateUrl: './panier-abondonne.component.html',
  styleUrls: ['./panier-abondonne.component.css']
})
export class PanierAbondonneComponent implements OnInit {

  totaLAngularPackage : any;
  constructor(private http: HttpClient) { }
  apiUrl = "http://127.0.0.1:8000/api/orders" ;
  
  nbPanier:any


  ngOnInit(): void {

    this.http.get<any>('http://127.0.0.1:8000/api/orders').subscribe(data =>{

    this.totaLAngularPackage = data.total;
    console.log(data);
     this.nbPanier = data['hydra:member'].lenght;
     this.nbPanier = data["hydra:totalItems"]; //recupere le nombre totale de panier 


    })
    
    
    

  }

}
