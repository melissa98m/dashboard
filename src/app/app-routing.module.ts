import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'not-found' , component: FourOhFourComponent},
  { path: '**' , redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
