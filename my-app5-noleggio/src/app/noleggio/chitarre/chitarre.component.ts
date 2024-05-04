import { Component, OnInit } from '@angular/core';
import { Chitarra } from './model/chitarra.model';
import { NoleggioService } from '../../noleggio.service';

@Component({
  selector: 'app-chitarre',
  templateUrl: './chitarre.component.html',
  styleUrl: './chitarre.component.css'
})
export class ChitarreComponent implements OnInit{
  
  mieChitarre: Chitarra[];

  id:number;
  marca: string;
  modello: string;
  prezzo:number;
  immagine: string;
  acquistabile: boolean ;

  constructor(private chitarraServ: NoleggioService){}
//lista delle chitarre
  ngOnInit(): void{
     this.chitarraServ.getChitarre().subscribe((chitarreApi: Chitarra[]) =>{

  this.mieChitarre = chitarreApi;
});
  }

  onAddChitarra(){
  let nuovaChitarra = new Chitarra(this.id,this.marca,this.modello,this.prezzo,this.immagine,this.acquistabile);
  this.chitarraServ.postChitarre(nuovaChitarra);

  }



  onAcquista(indice: number){
  
      console.log(indice);
       this.mieChitarre[indice].acquistabile = !this.mieChitarre[indice].acquistabile;

      
  }
    
  
  }
