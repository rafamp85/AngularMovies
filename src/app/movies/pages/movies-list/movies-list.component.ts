import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMoviesData } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: IMoviesData[] = [];

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe( movies => this.movies = movies );
  }

}
