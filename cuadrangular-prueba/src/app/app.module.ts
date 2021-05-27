import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidosComponent } from './partidos/partidos.component';
import { PartidoComponent } from './partido/partido.component';
import { TablapartidosComponent } from './tablapartidos/tablapartidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidosComponent,
    PartidoComponent,
    TablapartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
