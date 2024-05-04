import { Injectable } from '@angular/core';
import { Chitarra } from './noleggio/chitarre/model/chitarra.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService {
 url: string = "http://localhost:3000/chitarre"
 chitarre:Chitarra[];

  constructor(private httpServ: HttpClient) { }

  getChitarre(){
    return this.httpServ.get<Chitarra[]>(this.url);
  }

  postChitarre(chitarra:Chitarra){
    this.httpServ.post(this.url,chitarra)
    .subscribe(response =>{
      console.log("hai inserito una chitarra correttamente", response);
      
    })
  }

}
