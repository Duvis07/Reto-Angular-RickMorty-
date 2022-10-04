import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HeaderComponent } from './components/main/header/header.component';
import { LayoutComponent } from './components/main/layout/layout.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { RickandmortyDetailsComponent } from './components/rickandmorty/rickandmorty-details/rickandmorty-details.component';
import { RickandmortyListComponent } from './components/rickandmorty/rickandmorty-list/rickandmorty-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    RickandmortyDetailsComponent,
    RickandmortyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
