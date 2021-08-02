import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ResumeComponent } from './resume/resume.component';
import { TotalVentesComponent } from './total-ventes/total-ventes.component';
import { NbCommandesComponent } from './nb-commandes/nb-commandes.component';
import { NbPaniersComponent } from './nb-paniers/nb-paniers.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FourOhFourComponent,
    ResumeComponent,
    TotalVentesComponent,
    NbCommandesComponent,
    NbPaniersComponent,
    ValeurPanierMoyenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
