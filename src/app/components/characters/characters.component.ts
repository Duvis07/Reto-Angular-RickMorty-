import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Character } from 'src/app/shared/interfaces/Character';
import { RickMortyService } from 'src/app/shared/services/rick-morty.service';
import { MessageService, Message } from 'primeng/api';
import Swal from 'sweetalert2';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  info: RequestInfo = {
    next: null,
  };

  characters: Character[] = [];

  newArray: String[] = [];

  page: number = 0;

  showGoUpButton = false;

  private pageNum = 1;

  private query: string = '';

  

  constructor(
    private characterSvc: RickMortyService
  ) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
          this.characters.map((char) => {
            this.newArray.push(char.name);
          });
        } else {
          this.characters = [];
        }
      });
  }

  addCharacter(name: string) {
    this.newArray.push(name);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Personaje Agregado Correctamente',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
