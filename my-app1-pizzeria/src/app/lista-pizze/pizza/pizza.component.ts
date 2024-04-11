import { Component, Input } from '@angular/core';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
@Input() pizza: Pizza
assegnaColore(pizza:Pizza){
  if(pizza.nome == "Marinara"){
    return "bg-danger";
  }else if(pizza.nome == "Capricciosa"){
    return "bg-success";
  }else{
    return "bg-warning";
  }
}
}
