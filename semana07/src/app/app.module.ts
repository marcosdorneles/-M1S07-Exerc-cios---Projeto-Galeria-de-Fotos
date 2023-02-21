import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from '../components/galeria/galeria.component'

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaleriaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
