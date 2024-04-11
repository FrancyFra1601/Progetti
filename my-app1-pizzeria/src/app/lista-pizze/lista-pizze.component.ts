import { Component } from '@angular/core';
import { Pizza } from './pizza/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {

listaPizze: Pizza[] = [
  new Pizza("Marinara",["aglio", "pomodoro"],4,"https://upload.wikimedia.org/wikipedia/commons/1/11/Pizza_marinara.jpg","rossa"),
  new Pizza("Capricciosa",["funghi","capperi","acciughe","carciofi","olive","prosciutto"],7,"https://www.buttalapasta.it/wp-content/uploads/2017/11/pizza-capricciosa.jpg","rossa")
]

onAggiungiPizza(pizza:Pizza){
  this.listaPizze.push(pizza)
}
}
