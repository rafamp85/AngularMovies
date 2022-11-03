import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesData } from '../interfaces/movies.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) {}

  getMovies(): Observable<IMoviesData[]> {
    return this.http.get<IMoviesData[]>( `${ this.baseUrl }/data` );
  }

  getMovieById( id: string ): Observable<IMoviesData> {
    return this.http.get<IMoviesData>( `${ this.baseUrl }/data/${id}` );
  }
}
