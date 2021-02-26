import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ImportFilmesService } from './import.filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImportFilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
