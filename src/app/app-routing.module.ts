import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FitnessComponent } from './fitness/fitness.component';
import { CodingComponent } from './coding/coding.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fitness',
    component: FitnessComponent
  },
  {
    path: 'projects',
    component: CodingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}