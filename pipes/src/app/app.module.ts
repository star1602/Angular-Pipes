import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TercerEjercicioComponent } from './tercer-ejercicio/tercer-ejercicio.component';
import { FechaPipe } from './fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TercerEjercicioComponent,
    FechaPipe,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
