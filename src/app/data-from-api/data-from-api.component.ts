import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-from-api',
  templateUrl: './data-from-api.component.html',
  styleUrls: ['./data-from-api.component.css']
})
export class DataFromApiComponent implements OnInit {

  response:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void { // recupere l'api de symfony en local
    this.http.get("localhost:8000/api/orders").subscribe( (data: any)=> {this.response = data})
  }

}
