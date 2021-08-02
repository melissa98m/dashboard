import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ResumeComponent } from './resume/resume.component';
import { TotalVentesComponent } from './total-ventes/total-ventes.component';
import { NbCommandesComponent } from './nb-commandes/nb-commandes.component';
import { NbPaniersComponent } from './nb-paniers/nb-paniers.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'TotalVentes' , component: TotalVentesComponent },
  { path: 'NbCommandes' , component: NbCommandesComponent },
  { path: 'NbPaniers' , component: NbPaniersComponent },
  { path: 'PanierMoyen' , component: ValeurPanierMoyenComponent},
  { path: 'not-found' , component: FourOhFourComponent},
  { path: '**' , redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
