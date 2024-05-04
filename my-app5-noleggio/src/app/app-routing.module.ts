import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { ChitarreComponent } from './noleggio/chitarre/chitarre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noleggio', component:NoleggioComponent,
    children:[
      {path:'chitarre', component:ChitarreComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
