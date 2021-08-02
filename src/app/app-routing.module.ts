import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ResumeComponent } from './resume/resume.component';
import { TotalVentesComponent } from './total-ventes/total-ventes.component';
import { NbCommandesComponent } from './nb-commandes/nb-commandes.component';
import { NbPaniersComponent } from './nb-paniers/nb-paniers.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { RecurenseCommandesComponent } from './recurense-commandes/recurense-commandes.component';
import { PanierAbondonneComponent } from './panier-abondonne/panier-abondonne.component';
import { NbVisitesComponent } from './nb-visites/nb-visites.component';
import { ConversionPaniersComponent } from './conversion-paniers/conversion-paniers.component';
import { ConversionCommandesComponent } from './conversion-commandes/conversion-commandes.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'TotalVentes' , component: TotalVentesComponent },
  { path: 'NbCommandes' , component: NbCommandesComponent },
  { path: 'NbPaniers' , component: NbPaniersComponent },
  { path: 'PanierMoyen' , component: ValeurPanierMoyenComponent},
  { path: 'NewClients' , component: NewClientsComponent },
  { path: 'RecurenseCommandes' , component: RecurenseCommandesComponent},
  { path: 'PanierAbondonne' , component: PanierAbondonneComponent},
  { path: 'NbVisites' , component: NbVisitesComponent },
  { path: 'ConversionPanier' , component: ConversionPaniersComponent},
  { path: 'ConversionCommande' , component: ConversionCommandesComponent},
  { path: 'not-found' , component: FourOhFourComponent},
  { path: '**' , redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
