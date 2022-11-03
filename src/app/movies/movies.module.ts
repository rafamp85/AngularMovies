import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { MovieRoutingModule } from './movie-routing.module';

import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ImagePipe } from './pipes/image.pipe';





@NgModule({
  declarations: [
    MovieComponent,
    HomeComponent,
    MoviesListComponent,
    MovieCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MovieRoutingModule
  ]
})
export class MoviesModule { }
