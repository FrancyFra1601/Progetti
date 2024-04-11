import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ProprietariComponent } from './chi-siamo/proprietari/proprietari.component';
import { LavoratoriComponent } from './chi-siamo/lavoratori/lavoratori.component';
import { SediComponent } from './chi-siamo/sedi/sedi.component';

const routes: Routes = [
 {path: "",component: HomeComponent},
  {path:"chi-siamo", component: ChiSiamoComponent, children:[
     {path: "proprietari", component: ProprietariComponent},
     {path: "lavoratori", component: LavoratoriComponent},
     {path: "sedi", component: SediComponent},
  ]},
  {path:"contatti", component:ContattiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
