import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.css'
})
export class AddPizzaComponent {

  @Output() onPizza = new EventEmitter<Pizza>();

  miaNuovaPizza: Pizza = new Pizza("Margherita",["pomodoro","mozzarella"],5,"https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/fdl_content_import_it/margherita-50kalo.jpg")

  nomePizza:string;
  ingredienti:string[];
  tipologia:string;
  prezzo:number;
  locandinaPizza:string;


  onAggiungiPizza(){

    this.miaNuovaPizza ={
      nome : this.nomePizza,
      ingredienti: this.ingredienti,
      tipologia: this.tipologia,
      prezzo: this.prezzo,
      locandina: this.locandinaPizza,

    }

    this.onPizza.emit(this.miaNuovaPizza);
  }
}
