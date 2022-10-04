import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Character } from 'src/app/shared/interfaces/Character';
import { RickMortyService } from 'src/app/shared/services/rick-morty.service';

@Component({
  selector: 'app-rickandmorty-list',
  templateUrl: './rickandmorty-list.component.html',
  styleUrls: ['./rickandmorty-list.component.css']
})
export class RickandmortyListComponent implements OnInit {

  characters: Character[] = [];

 
  showGoUpButton = false;

  private pageNum = 1;

  page: number = 0;

  private query: string = '';

  private hideScrollHeight = 200;

  private showScrollHeight = 500;



  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: RickMortyService,
    private route: ActivatedRoute,
    private router: Router,

  ) { 
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }


  onScrollTop():void{
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.query = params['q'];
      this.getDataFromService();
    })
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
        } else {
          this.characters = [];
        }
      })
    }
    
    onSearch(value: string) {
      console.log("Buscar ->", value);
      
      if (value && value.length > 3) {
        this.router.navigate(['/rickandmorty-list'], {
          queryParams: { q: value },
        });
      }
    }

}
  


