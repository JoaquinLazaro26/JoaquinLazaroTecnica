import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscarhistorialComponent } from './buscarhistorial/buscarhistorial.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarhistorialComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
