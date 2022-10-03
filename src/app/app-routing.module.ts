import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/main/layout/layout.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RickandmortyDetailsComponent } from './components/rickandmorty/rickandmorty-details/rickandmorty-details.component';
import { RickandmortyListComponent } from './components/rickandmorty/rickandmorty-list/rickandmorty-list.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'rickandmorty-list',
    component: RickandmortyListComponent,
  },
  {
    path: 'rickandmorty-details/:id',
    component: RickandmortyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
