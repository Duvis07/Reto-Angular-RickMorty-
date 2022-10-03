import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MainComponent } from './components/main/main.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HeaderComponent } from './components/main/header/header.component';
import { LayoutComponent } from './components/main/layout/layout.component';
import { MenuComponent } from './components/main/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MainComponent,
    RickandmortyComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
