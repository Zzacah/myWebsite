import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FitnessComponent } from './fitness/fitness.component';
import { CodingComponent } from './coding/coding.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InstagramService } from './instagram.service';


@NgModule({
  declarations: [
    AppComponent,
    FitnessComponent,
    CodingComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ InstagramService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
