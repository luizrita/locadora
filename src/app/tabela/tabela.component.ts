import { Component, OnInit } from '@angular/core';
import { ImportFilmesService } from '../import.filmes.service';

@Component({
    selector: 'tabela-component',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css'],
    providers: []
})

export class TabelaComponent implements OnInit {

    filmes = [];

    constructor(
      private importFilmesService : ImportFilmesService
    ) { };

    ngOnInit() {
      this.importFilmesService.getJSON().subscribe(data => {
          this.filmes = data.filmes;
      });
    }
}