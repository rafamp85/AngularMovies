import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { IMoviesData } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie!: IMoviesData;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.movieService.getMovieById( id ) )
      )
      .subscribe( movie => this.movie = movie );
  }

  onBackToMain() {
    this.router.navigate(['/home/list']);
  }

}
