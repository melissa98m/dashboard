import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-commandes',
  templateUrl: './nb-commandes.component.html',
  styleUrls: ['./nb-commandes.component.css']
})
export class NbCommandesComponent implements OnInit {

  constructor(private http: HttpClient) { }

    
  nbCommande:any;
  totaLAngularPackage : any;

  ngOnInit(): void {


    this.http.get<any>('http://127.0.0.1:8000/api/orders').subscribe(data =>{

      this.totaLAngularPackage = data.total;
      console.log(data);
       this.nbCommande = data['hydra:member'].lenght;
       this.nbCommande = data["hydra:totalItems"]; //recupere le nombre totale de commande
  
  })

}

}
