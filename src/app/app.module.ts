import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
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
import { ProduitsVendusComponent } from './produits-vendus/produits-vendus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FourOhFourComponent,
    TotalVentesComponent,
    NbCommandesComponent,
    NbPaniersComponent,
    ValeurPanierMoyenComponent,
    NewClientsComponent,
    RecurenseCommandesComponent,
    PanierAbondonneComponent,
    NbVisitesComponent,
    ConversionPaniersComponent,
    ConversionCommandesComponent,
    ProduitsVendusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
