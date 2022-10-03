import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/interfaces/Character';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from 'src/app/shared/services/rick-morty.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rickandmorty-details',
  templateUrl: './rickandmorty-details.component.html',
  styleUrls: ['./rickandmorty-details.component.css']
})
export class RickandmortyDetailsComponent implements OnInit {

  character$!: Observable<Character | any>;

  constructor(private route: ActivatedRoute, private characterSvc: RickMortyService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }

}
