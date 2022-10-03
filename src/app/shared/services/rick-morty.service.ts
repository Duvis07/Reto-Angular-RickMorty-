import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../interfaces/Character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private _http: HttpClient) { }
  
  searchCharacters(query = '', page = 200):Observable<Character[]> {
    const filter = `${environment.urlApi}/?name=${query}&page=${page}`;
    return this._http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    return this._http.get<Character>(`${environment.urlApi}/${id}`)
  }
}