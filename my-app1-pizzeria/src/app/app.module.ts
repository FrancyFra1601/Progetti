import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { PizzaComponent } from './lista-pizze/pizza/pizza.component';
import { AddPizzaComponent } from './lista-pizze/add-pizza/add-pizza.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProprietariComponent } from './chi-siamo/proprietari/proprietari.component';
import { LavoratoriComponent } from './chi-siamo/lavoratori/lavoratori.component';
import { SediComponent } from './chi-siamo/sedi/sedi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PizzaComponent,
    ListaPizzeComponent,
    AddPizzaComponent,
    ChiSiamoComponent,
    ContattiComponent,
    ProprietariComponent,
    LavoratoriComponent,
    SediComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
